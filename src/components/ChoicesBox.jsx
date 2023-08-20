import Choice from "./Choice";
function shuffleChoices(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array; // Return the first 20 items
}

export default function ChoicesBox({ questions, index }) {
  const testList = shuffleChoices([...questions[index].choices]);
  return (
    <div className="flex flex-col m-4 w-3/5 select-none">
      {testList.map((currChoice) => (
        <Choice choice={currChoice} key={currChoice} />
      ))}
    </div>
  );
}
