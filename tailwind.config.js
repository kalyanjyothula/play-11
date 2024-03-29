/** @type {import('tailwindcss').Config} */
const fontFamily = require('./styles/typography/fontFamily');
const fontSize = require('./styles/typography/fontSize');
const letterSpacing = require('./styles/typography/letterSpacing');
const colors = require('./styles/abstracts/color');
const screens = require('./styles/abstracts/screen');
const boxShadow = require('./styles/typography/boxShadow');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
      screens,
      fontFamily,
      fontSize,
      letterSpacing,
      boxShadow,
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // require('tailwind-scrollbar-hide'),
  ],
}