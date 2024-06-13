/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': '#0000FF',
        'grey': '#808080',
        'white':'#FFFFFF'
      }
    },
  },
  plugins: [],
}

