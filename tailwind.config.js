/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryBackground: "#000",
      primaryText: "#000",
      secondaryBakcground: "#FFF",
      secondaryText: "#FFF",
      buttonBackground: "#D87D4A",
      gray: "rgba(241, 241, 241, 1)",
    },
    container: {
      center: true,
      screens: {
        lg: "920px",
      },
    },
    borderColor: {
      white: "#FFF",
    },
    fontFamily: {
      monrope: ["'Manrope', sans-serif"],
    },
  },
  plugins: [],
};
