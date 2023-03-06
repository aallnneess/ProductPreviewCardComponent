/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
      'Fraunces': ['Fraunces']
    },
    colors: {
      'Dark-cyan': '#3c8067',
      'Cream': '#f2ebe3',
      'Very-dark-blue': '#1c232b',
      'Dark-grayish-blue': '#6c7289',
      'White': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
