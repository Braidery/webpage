// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          300: '#f7c9b1',
          400: '#e8a57d',
        },
        brown: {
          600: '#9e6b4b',
        },
        darkButton: '#333333',
        darkBackground: '#141414',
      },
    },
  },
  plugins: [],
};
