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
        'translink-yellow': '#ffd800',
        'translink-light-blue': '#e6f0fa',
        'translink-dark': '#004b87',
        'translink-gray': '#f5f7fa'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 102, 179, 0.05)',
        'medium': '0 6px 30px rgba(0, 102, 179, 0.1)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.08)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      fontSize: {
        'xxs': '0.65rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
} 