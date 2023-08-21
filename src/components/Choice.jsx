const standardStyle =
  "text-center bg-custom-green text-custom-blue rounded-lg p-4 m-4 font-custom font-bold text-2xl transition-transform duration-300 ease-in-out";

function applyStyle(userChoice, correctChoice, choice) {
  // This is not the choice the user chose
  if (userChoice !== choice && choice !== correctChoice) {
    return "bg-slate-500";
  }

  // User chose incorrectly
  if (userChoice === choice && userChoice !== correctChoice) {
    return "bg-red-500";
  }

  // Mark the correct answer
  if (choice === correctChoice) {
    return "bg-green-500";
  }
}

export default function Choice({
  choice,
  dispatch,
  userChoice,
  correctChoice,
}) {
  const userMadeChoice = userChoice !== null;

  const appliedStyle = userMadeChoice
    ? applyStyle(userChoice, correctChoice, choice)
    : "";
  return (
    <button
      disabled={userMadeChoice}
      onClick={() => dispatch({ type: "userMadeChoice", payload: choice })}
      className={`${standardStyle} ${appliedStyle} ${
        userMadeChoice
          ? ""
          : "hover:translate-x-4 hover:opacity-70 cursor-pointer"
      }`}
    >
      {choice}
    </button>
  );
}
