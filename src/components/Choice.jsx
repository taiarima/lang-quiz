export default function Choice({ choice }) {
  return (
    <div className="text-center bg-custom-green text-custom-blue rounded-lg p-4 m-4 font-custom font-bold text-2xl transition-transform duration-300 ease-in-out hover:translate-x-4 cursor-pointer hover:opacity-70">
      {choice}
    </div>
  );
}
