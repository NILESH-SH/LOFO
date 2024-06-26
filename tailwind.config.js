/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ["Poppins", "sans-serif"],
      },
      colors: {
        'primary' : "#e7a20d", 
        'secondary' : "#F5E7B2",
      }
    },
  },
  plugins: [],
};
