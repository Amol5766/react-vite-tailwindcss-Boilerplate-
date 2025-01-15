/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#4A2C2A',
          600: '#8E603A',
        },
      },
    },
  },
  plugins: [],
};
