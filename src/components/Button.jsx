export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-custom-green rounded-lg w-80 h-20 m-4 text-custom-blue font-title font-extrabold text-4xl border border-custom-pink"
    >
      {children}
    </button>
  );
}
