/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          300: '#b794f4',
          400: '#9f7aea',
          500: '#805ad5',
          600: '#6b46c1',
        },
      },
    },
  },
  plugins: [],
};
