/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '640px',

      md: '760px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',

    },
    extend: {
      // backgroundImage: {
      //   'registerbg': "url('client/src/assets/registerbg.jpg')",
      // },
      colors: {
        'simplicity': '#f7fbb1',
        'simplicityHover': '#eef482',
        'social': '#99cdfb',
        'socialHover': '#64aff1',
        'trust': '#a2f377',
        'trustHover': '#c5faa8',
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}