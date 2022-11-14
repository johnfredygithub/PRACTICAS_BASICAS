/**@type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  purge: ['./src/**/*{html,js}'],
  theme: {
    colors: { ...colors },
  },
  plugins: [
         require('@tailwindcss/forms'),
    
  ],
};
