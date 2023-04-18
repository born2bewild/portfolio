const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kalam: ['var(--font-kalam)'],
      },
      animation: {
        'bounce-200': 'bounce 1s infinite 200ms',
        'bounce-400': 'bounce 1s infinite 400ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
