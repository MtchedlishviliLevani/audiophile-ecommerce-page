/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#000",
        primaryText: "#000",
        secondaryBakcground: "#FFF",
        secondaryText: "#FFF",
        buttonBackground: "#D87D4A",
        buttonBackgroundHoverOrange: "rgba(251, 175, 133)",
        hoverBlackColorBg: "#4C4C4C",
        gray: "rgba(241, 241, 241, 1)",
      },
      container: {
        padding: "5%",
        center: true,
        screens: {
          sm: "90%",
          lg: "1110px",
          "2xl": "1300px",
        },
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "920px",
        xl: "1280px",
        "2xl": "1536px",
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
  },
  plugins: [],
};
