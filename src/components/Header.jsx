import fishProfImg from "../assets/lang-quiz-img.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center cursor-default">
      <img src={fishProfImg} className="h-60" />
      <h1 className="font-title text-9xl text-custom-green font-bold text-center">
        The Linguist's Challenge
      </h1>
      <h2 className="text-custom-pink text-2xl font-custom m-4 text-center">
        A Challenging Quiz on Languages and Linguistics
      </h2>
    </header>
  );
}
