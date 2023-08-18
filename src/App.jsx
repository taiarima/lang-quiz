import Header from "./components/Header";
import Button from "./components/Button";
import TitleScreen from "./components/TitleScreen";
import Main from "./components/Main";
import { useEffect, useState } from "react";

export default function App() {
  const [showTitleScreen, setShowTitleScreen] = useState(true);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error"));
  });

  function handleShowTitleScreen() {
    setShowTitleScreen(false);
  }

  return (
    <>
      {showTitleScreen ? (
        <TitleScreen>
          <Header />
          <Button onClick={handleShowTitleScreen}>Start</Button>
        </TitleScreen>
      ) : (
        <Main></Main>
      )}
    </>
  );
}
