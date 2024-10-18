/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-lavender": "#E7E0F1",
        "custom-violet": {
          DEFAULT: "#543181",
          dark: "#402B5B",
        },
        "custom-dark-grey": "#969696",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
