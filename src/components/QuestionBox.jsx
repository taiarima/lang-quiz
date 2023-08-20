import ProgressBar from "./ProgressBar";

export default function QuestionBox({ questions, index }) {
  return (
    <div className="flex p-6 rounded-lg w-2/3 text-center font-bold flex-col">
      <ProgressBar index={index + 1} />
      <h2 className="text-4xl font-custom text-custom-green select-none mt-10 cursor-default">
        Question {index + 1}: {questions[0].question}
      </h2>
    </div>
  );
}
