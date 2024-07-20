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
        shade_03: '#0048B2',
        tint_01: '#E5EFFF',
        tint_03: '#99C2FF',
        tint_04: '#66A3FE',
      },
      keyframes: {
        captureOn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        captureOff: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    animation: {
      captureEnter: 'captureOn 0.3s ease-in-out',
      captureExit: 'captureOff 0.3s ease-in-out',
    },
  },
  plugins: [],
};
