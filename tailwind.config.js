/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: { DEFAULT: '#1E1818', lite: '#393434' },
        primary: { DEFAULT: '#A37AF2' },
      },
    },
  },
  plugins: [],
};
