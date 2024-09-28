/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['Intel', 'Arial', 'sans-serif'],
    poppins: ['var(--poppins)']
  },
  darkMode: 'class', // Enabling dark mode
};

