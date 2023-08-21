import fishProfImg from "../assets/lang-quiz-img.png";

const exitStyle = "animatecss animatecss-hinge animatecss-delay-1s";

export default function WelcomeHeader() {
  return (
    <header className="flex flex-col items-center cursor-default">
      <img src={fishProfImg} className="h-60" />
      <h1 className="font-liney sm:text-9xl text-6xl text-custom-green text-center">
        The Linguist's Challenge
      </h1>
      <h2 className="text-custom-pink text-2xl font-custom m-4 text-center font-bold">
        An Educational Quiz on Languages and Linguistics
      </h2>
    </header>
  );
}
