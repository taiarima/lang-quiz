export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="animate-pulse bg-custom-green rounded-lg w-80 h-20 m-4 mb-20 text-custom-blue font-title font-extrabold text-4xl border border-custom-pink hover:bg-custom-purple hover:text-custom-green"
    >
      {children}
    </button>
  );
}
