export default function ProgressBar({ index }) {
  const percentage = (index / 20) * 100;

  return (
    <div className="w-full h-4 bg-gray-300 rounded">
      <div
        className="h-full text-center text-xs text-white bg-custom-purple transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
