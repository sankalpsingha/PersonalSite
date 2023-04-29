/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      serif: ["Libre Baskerville", "serif"],
    },
    extend: {
      colors: {
        secondary: "#909499",
      },
    },
  },
  plugins: [],
};
