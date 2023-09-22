const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans', 'sans-serif'],
        lalezar: ['lalezar', 'sans-serif'],
        vazirmatn: ['vazirmatn', 'sans-serif'],
        bnazanin: ['bnazanin', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./../images/solutions-bg-dots.png')",
        'feedback': "url('./../images/feedback-bg.png')",
      }
    },
  },
  plugins: [],
}
