import { useState, useEffect } from "react";

import Choice from "./Choice";
function shuffleChoices(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function ChoicesBox({ questions, index, dispatch, userChoice }) {
  const [shuffledChoices, setShuffledChoices] = useState([]);

  useEffect(() => {
    const newShuffledChoices = shuffleChoices([...questions[index].choices]);
    setShuffledChoices(newShuffledChoices);
  }, [index, questions]);

  return (
    <div className="flex flex-col m-4 w-3/5 select-none">
      {shuffledChoices.map((currChoice) => (
        <Choice
          choice={currChoice}
          dispatch={dispatch}
          userChoice={userChoice}
          correctChoice={questions[index].correctChoice}
          key={currChoice}
        />
      ))}
    </div>
  );
}
