/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'star-wars-yellow': '#FFE81F',
          'dark-space': {
            900: '#0f172a',
            800: '#1a202c',
            700: '#2d3748',
          },
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
        },
        boxShadow: {
          'star-wars': '0 0 10px rgba(255, 232, 31, 0.5)',
        },
      },
    },
    plugins: [],
  }