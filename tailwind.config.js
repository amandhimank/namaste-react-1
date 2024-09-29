/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [],
  },
  plugins: [
    require('daisyui'),
  ],
}

