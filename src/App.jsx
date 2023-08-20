import WelcomeHeader from "./components/WelcomeHeader";
import Button from "./components/Button";
import TitleScreen from "./components/TitleScreen";
import Main from "./components/Main";
import { useEffect, useReducer, useState } from "react";
import { Transition } from "@headlessui/react";
import Footer from "./components/Footer";
import QuestionBox from "./components/QuestionBox";
import FunFactBox from "./components/FunFactBox";
import ChoicesBox from "./components/ChoicesBox";
import ResultsView from "./components/ResultsView";
import QuizHeader from "./components/QuizHeader";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  currIndex: 0,
};

function shuffleAndSlice(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array.slice(0, 20); // Return the first 20 items
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      const twentyShuffledQuestions = shuffleAndSlice([...action.payload]);
      return { ...state, questions: twentyShuffledQuestions, status: "ready" };
    case "dataNotRetrieved":
      return { ...state, status: "error" };
    default:
      throw new Error("An unrecognized action was attempted.");
  }
}

export default function App() {
  const [{ questions, status, currIndex }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [showTitleScreen, setShowTitleScreen] = useState(true);
  const [showAnswer, setShowAnswer] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(function () {
    fetch("/questions.json")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataNotRetrieved", payload: err }));
  }, []);

  //fetch('/your-json-filename.json')

  function handleShowTitleScreen() {
    setShowTitleScreen(false);
  }

  return (
    <>
      <Transition
        appear={true}
        show={showTitleScreen}
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
            show={showTitleScreen}
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
            show={showTitleScreen}
            enter="transition duration-2000"
            enterFrom="transform rotate-0 translate-y-0"
            enterTo="transform rotate-0 translate-y-0"
            leave="transition transform duration-1000"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            {status === "ready" ? (
              <Button onClick={handleShowTitleScreen}>Enter</Button>
            ) : (
              <Button>Loading...</Button>
            )}
          </Transition>
        </TitleScreen>
      </Transition>
      <Transition
        show={!showTitleScreen}
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
          <ChoicesBox questions={questions} index={currIndex} />
          {showAnswer ? (
            <FunFactBox questions={questions} index={currIndex} />
          ) : (
            false
          )}
          {showResults ? <ResultsView /> : false}
        </Main>
      </Transition>
      <Footer />
    </>
  );
}
