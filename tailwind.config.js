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
        'white':'#FFFFFF',
        'sunset':'#FBE0C3',
        'charcoal-black':'#2D2D2D',
        'slate-grey':'#3A3A3A'
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

