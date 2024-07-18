/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        top: '0 -3px 7px 1px rgba(0,0,0,0.1)',
      },
      colors: {
        primary: '#0066FE',
        sub1: '#E5EFFF',
        sub2: '#0048B2',
      },
    },
  },
  plugins: [],
};
