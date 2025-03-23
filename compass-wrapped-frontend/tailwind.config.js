/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'translink-blue': '#0066b3',
        'translink-secondary': '#4d94db',
        'translink-yellow': '#ffd800'
      },
    },
  },
  plugins: [],
} 