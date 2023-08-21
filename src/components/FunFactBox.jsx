import Button from "./Button";

export default function FunFactBox({
  questions,
  index,
  userChoice,
  dispatch,
  quizLength,
}) {
  return (
    <div className="flex flex-col items-center select-none">
      <p className="w-3/5 bg-custom-darkblue text-white p-4 font-custom text-2xl flex flex-col mx-6">
        <span>
          {userChoice === questions[index].correctChoice
            ? "Correct."
            : "Incorrect."}
        </span>
        {questions[index].funFact}
      </p>
      {(index + 1) % quizLength === 0 ? (
        <Button onClick={() => dispatch({ type: "quizFinished" })}>
          View Results
        </Button>
      ) : (
        <Button onClick={() => dispatch({ type: "nextQuestion" })}>Next</Button>
      )}
    </div>
  );
}
