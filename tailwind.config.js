/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#444757',
          opacity: '#444757d4',
          ligth: '#AFB3C9',
          300: '#696D86',
          400: '#5C5F76',
        },
        secondary: {
          DEFAULT: '#0A295C',
          opacity: '#0A295Cd4',
          ligth: '##4479D1',
          300: '#2B559C',
          400: '#224787',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
