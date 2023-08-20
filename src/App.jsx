import Header from "./components/Header";
import Button from "./components/Button";
import TitleScreen from "./components/TitleScreen";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Footer from "./components/Footer";

export default function App() {
  const [showTitleScreen, setShowTitleScreen] = useState(true);

  // useEffect(function () {
  //   fetch("http://localhost:8000/questions")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error("error"));
  // });

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
        leave="transition-opacity duration-2500 delay-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <TitleScreen>
          <Transition
            appear={true}
            show={showTitleScreen}
            enter="transition duration-2000"
            enterFrom="transform rotate-0 translate-y-0"
            enterTo="transform rotate-0 translate-y-0"
            leave="transition-transform duration-2000 delay-500"
            leaveFrom="transform rotate-0 translate-y-0"
            leaveTo="transform rotate-45 translate-y-full"
          >
            <Header />
          </Transition>

          <Transition
            show={showTitleScreen}
            leave="transition transform duration-1000"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <Button onClick={handleShowTitleScreen}>Start</Button>
          </Transition>
        </TitleScreen>
      </Transition>
      <Transition show={!showTitleScreen}>
        <Main></Main>
      </Transition>

      <Footer />
    </>
  );
}
