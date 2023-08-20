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

      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms",
      },
      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms",
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
