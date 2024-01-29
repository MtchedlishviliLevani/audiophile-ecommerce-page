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
        sm: "480px",
        lg: "920px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "920px",
      xl: "1280px",
    },
    borderColor: {
      white: "#FFF",
    },
    fontFamily: {
      monrope: ["'Manrope', sans-serif"],
    },
    backgroundImage: {
      earphone: "url('../assets/images/home/desktop/image-hero.jpg')",
    },
  },
  plugins: [],
};
