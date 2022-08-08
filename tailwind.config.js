/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  // prefix: 'tw-',
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        'sm': '0px 1px 2px rgba(0, 0, 0, 0.05)',
      },
      width: {
        '512': '512px',
      },
      height: {
        '520': '520px'
      }
    },
  },
  plugins: [],
}
