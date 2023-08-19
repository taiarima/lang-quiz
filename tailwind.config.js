/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Amatic SC", "cursive"],
        custom: ["Hammersmith One", "sans-serif"],
      },
      colors: {
        "custom-blue": "var(--color-blue)",
        "custom-purple": "var(--color-purple)",
        "custom-green": "var(--color-green)",
        "custom-red": "var(--color-red)",
        "custom-pink": "var(--color-pink)",
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
