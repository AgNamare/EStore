/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        "text-white": "#FAFAFA",
        "secondaryFade": "#F5F5F5"
      }
    },
  },
  plugins: [],
}