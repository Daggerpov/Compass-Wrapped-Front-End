/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'translink-blue': '#0066B3',
        'translink-yellow': '#FFD800',
        'translink-secondary': '#004B8D',
      },
    },
  },
  plugins: [],
} 