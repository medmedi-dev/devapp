/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#DEB761',
          DEFAULT: '#B38E3C',
          dark: '#8B6E2F',
        },
      },
    },
  },
  plugins: [],
};