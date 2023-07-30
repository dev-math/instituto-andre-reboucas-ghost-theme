/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      blue: {
        300: "#299BEE",
        500: "#000088",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      red: {
        300: "#E36969",
        500: "#CE2626",
      },
      orange: "#ff7849",
      green: {
        nav: "#D2E2CC",
        100: "#8EC36F",
        300: "#528236",
        500: "#203A10",
      },
      yellow: {
        300: "#FEFE91",
        500: "#ffff63",
      },
      black: "#000000",
      gray: {
        100: "#d3dce6",
        300: "#8492a6",
        500: "#343A40",
      },
    },
    variants: {
      extend: {},
      responsive: ["responsive"],
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
