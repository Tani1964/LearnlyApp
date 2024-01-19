/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FB9D18"
      },
      fontFamily: {
        'customFont': ['"Custom Font"', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}