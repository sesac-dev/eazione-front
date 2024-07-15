/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        top: '0 2px 7px 1px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
