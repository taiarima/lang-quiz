import Button from "./Button";

export default function FunFactBox({ questions, index }) {
  return (
    <div className="flex flex-col items-center">
      <p className="w-3/5 bg-custom-darkblue text-white p-4 font-custom text-2xl flex flex-col mx-6">
        <span>Correct. </span>
        {questions[index].funFact}
      </p>
      <Button>Next</Button>
    </div>
  );
}
