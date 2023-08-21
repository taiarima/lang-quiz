import { useEffect, useReducer, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import WelcomeHeader from "./components/WelcomeHeader";
import Button from "./components/Button";
import TitleScreen from "./components/TitleScreen";
import Main from "./components/Main";
import { Transition } from "@headlessui/react";
import Footer from "./components/Footer";
import QuestionBox from "./components/QuestionBox";
import FunFactBox from "./components/FunFactBox";
import ChoicesBox from "./components/ChoicesBox";
import ResultsView from "./components/ResultsView";
import QuizHeader from "./components/QuizHeader";

const QUIZ_LENGTH = 20;

const initialState = {
  questions: [],
  status: "loading",
  currIndex: 0,
  userChoice: null,
  points: 0,
  scoresList: [],
  bestScore: 0,
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const DEFAULT_POINTS_FOR_CORRECT_ANSWER = 5;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      const twentyShuffledQuestions = shuffleArray([...action.payload]);
      return { ...state, questions: twentyShuffledQuestions, status: "ready" };
    case "dataNotRetrieved":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "userMadeChoice":
      const correctAnswer = state.questions[state.currIndex].correctChoice;
      const pointsEarned =
        action.payload === correctAnswer
          ? DEFAULT_POINTS_FOR_CORRECT_ANSWER
          : 0;
      return {
        ...state,
        userChoice: action.payload,
        points: state.points + pointsEarned,
      };
    case "nextQuestion":
      return {
        ...state,
        currIndex: state.currIndex + 1,
        userChoice: null,
      };
    case "quizFinished":
      const newBestScore = Math.max(state.bestScore, state.points);
      return {
        ...state,
        status: "finished",
        bestScore: newBestScore,
        scoresList: [...state.scoresList, state.points],
      };
    case "retakeQuiz":
      console.log("Trying to retake quiz");
      return {
        ...state,
        status: "active",
        points: 0,
        userChoice: null,
        currIndex: state.currIndex + 1,
      };
    default:
      throw new Error("An unrecognized action was attempted.");
  }
}

export default function App() {
  const [
    { questions, status, currIndex, userChoice, points, scoresList, bestScore },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("/questions.json")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataNotRetrieved", payload: err }));
  }, []);

  useEffect(() => {
    if (userChoice === null) {
      scroll.scrollToTop({ duration: 700, smooth: "easeInOutQuart" });
    } else {
      scroll.scrollToBottom({ duration: 700, smooth: "easeInOutQuart" });
    }
  }, [userChoice]);

  return (
    <>
      {status === "loading" || status === "ready" ? (
        <Transition
          appear={true}
          show={true}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-2500"
          leaveFrom="opacity-100"
          leaveTo="opacity-10"
        >
          <TitleScreen>
            <Transition
              appear={true}
              show={true}
              enter="transition duration-2000"
              enterFrom="transform rotate-0 translate-y-0"
              enterTo="transform rotate-0 translate-y-0"
              leave="transition-transform duration-2000 delay-700"
              leaveFrom="transform  translate-y-0"
              leaveTo="transform -translate-y-full"
            >
              <WelcomeHeader />
            </Transition>

            <Transition
              appear={true}
              show={true}
              enter="transition duration-2000"
              enterFrom="transform rotate-0 translate-y-0"
              enterTo="transform rotate-0 translate-y-0"
              leave="transition transform duration-1000"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              {status === "ready" ? (
                <Button onClick={() => dispatch({ type: "startQuiz" })}>
                  Start
                </Button>
              ) : (
                <Button>Loading...</Button>
              )}
            </Transition>
          </TitleScreen>
        </Transition>
      ) : null}

      {status === "active" ? (
        <Transition
          show={true}
          enter="transition-opacity duration-2000 delay-2500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-2000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Main>
            <QuizHeader />
            <QuestionBox questions={questions} index={currIndex} />
            <ChoicesBox
              questions={questions}
              index={currIndex}
              dispatch={dispatch}
              userChoice={userChoice}
            />
            {userChoice !== null && (
              <FunFactBox
                questions={questions}
                index={currIndex}
                userChoice={userChoice}
                dispatch={dispatch}
                quizLength={QUIZ_LENGTH}
              />
            )}
          </Main>
        </Transition>
      ) : null}

      {status === "finished" ? (
        <>
          <QuizHeader />
          <ResultsView
            points={points}
            scoresList={scoresList}
            bestScore={bestScore}
            uniqueNumTries={Math.round(questions.length / QUIZ_LENGTH)}
            dispatch={dispatch}
          />
        </>
      ) : null}

      <Footer />
    </>
  );
}
