const sans = require('tailwindcss/defaultTheme').fontFamily.sans;

module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
