const def = require('tailwindcss/defaultTheme').fontFamily;

module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', def.sans],
        mono: ['Roboto Mono', def.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
