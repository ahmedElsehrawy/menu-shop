/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "cursive"],
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      text: "#575d45",
      primaryColor: "rgb(165 125 73)",
      card: "#ffefda",
      card2: "#f3cfb2",
      cardsbg: "#f4d4ba4f",
      plate1: "#d0d6bd",
      plate2: "#adb88c",
      plate3: "#8a9a5b",
      plate4: "#606b3f",
      plate5: "#373d24",
    },
  },
  plugins: [],
};
