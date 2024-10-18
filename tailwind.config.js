/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#543181",
          hover: "#402B5B",
        },
        secondary: "#E7E0F1",
        accent: "#414141",
        neutral: {
          white: "#FFFFFF",
          grey: "#7C7C7C",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
