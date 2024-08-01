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
        tine_06: '#1975FE',
        ui_01: '#333333',
        ui_04: '#858585',
        ui_05: '#999999',
        ui_06: '#ADADAD',
        ui_07: '#C2C2C2',
        ui_08: '#D6D6D6',
        ui_09: '#E1E1E1',
        ui_10: '#EBEBEB',
        ui_11: '#F5F5F5',
        ui_12: '#F8F8F8',
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
        sheetOn: {
          from: { opacity: 0, transform: 'translateY(384px)' },
          to: { opacity: 1 },
        },
        sheetOff: {
          from: { opacity: 1 },
          to: { opacity: 0, transform: 'translateY(384px)' },
        },
      },
    },
    animation: {
      captureEnter: 'captureOn 0.3s ease-in-out',
      captureExit: 'captureOff 0.3s ease-in-out',
      bounce: 'bounce 0.7s ease-in-out infinite',
      sheetOn: 'sheetOn 0.3s ease-in-out',
      sheetOff: 'sheetOff 0.3s ease-in',
    },
  },
  plugins: [],
};
