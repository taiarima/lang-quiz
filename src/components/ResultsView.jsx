import Button from "./Button";

const PERFECT_SCORE = 100;

function determineResultsMessage(points) {
  if (points === 100)
    return (
      <>
        Absolute excellence. You achieved a perfect score.
        <br />
        You are a true linguist.
      </>
    );

  if (points >= 80)
    return `Congratulations, you got a great score! You earned ${points} out of ${PERFECT_SCORE} points!`;

  if (points >= 60)
    return `Not bad! You achieved ${points} points out of ${PERFECT_SCORE}`;

  if (points >= 40)
    return `Good work, you finished the quiz! You earned ${points} out of ${PERFECT_SCORE} points!`;

  if (points >= 0)
    return `Hmm... that was a tough quiz, eh? You only earned ${points} out of ${PERFECT_SCORE} points, but it's never too late to fall in love with languages and embark on your journey to learn the beauty of linguistics!`;
}

function calcAvgScore(scoreList) {
  const sum = scoreList.reduce((acc, currPoints) => acc + currPoints, 0);
  return sum / scoreList.length;
}

export default function ResultsView({
  points,
  uniqueNumTries,
  bestScore,
  scoresList,
  dispatch,
}) {
  const resultsMessage = determineResultsMessage(points);
  const avgScore = calcAvgScore(scoresList);
  return (
    <div className=" text-white rounded-lg w-4/5 flex flex-col p-6 font-custom my-4 mx-auto items-center text-justify">
      <h1 className="text-4xl m-4 text-center">{resultsMessage}</h1>
      <div className="flex flex-col items-center font-title border border-l-slate-200 p-4 m-4 rounded">
        <h1 className="text-2xl">Your Scoresheet</h1>
        <h2 className="text-6xl mx-auto my-4">
          {points} / {PERFECT_SCORE} Points
        </h2>
        <h2 className="text-6xl mx-auto my-4">
          {scoresList.length} Attempt{scoresList.length > 1 ? "s" : ""}
        </h2>
        <h2 className="text-6xl mx-auto my-4">Best score: {bestScore}</h2>
        <h2 className="text-6xl mx-auto my-4">Average score: {avgScore}</h2>
      </div>

      <p className="text-2xl m-4">
        Thank you for taking this quiz. I hope you found it challenging, fun,
        and educational. You can take the quiz up to {uniqueNumTries} times and
        get unique questions every time. Your high score and average score will
        be calculated each time you retake the quiz.
      </p>
      <p className="text-2xl m-4">
        If you enjoyed this quiz and would like to support me, please consider
        sharing the quiz with your friends or linking the quiz on social media.
        You can also check out{" "}
        <a
          className="underline text-custom-pink"
          href="https://www.youtube.com/@LanguageEnthusiasm-lc9uo/videos"
        >
          my recently launched YouTube channel
        </a>{" "}
        where I talk about linguistics, foreign language learning, and more.
      </p>
      <h3 className="text-6xl mx-auto my-4 font-liney">THANK YOU</h3>

      {scoresList.length == uniqueNumTries ? (
        <Button onClick={() => dispatch({ type: "startQuiz" })}>
          Start Over
        </Button>
      ) : (
        <Button onClick={() => dispatch({ type: "retakeQuiz" })}>
          Retake Quiz
        </Button>
      )}
      <div className="mb-10"></div>
    </div>
  );
}

// Congratulations! You achieved a score of...
// Not bad! You scored...
// Good work, you finished the quiz.
