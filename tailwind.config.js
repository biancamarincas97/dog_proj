/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'nunito':['Nunito', 'sans-serif'],
        'sans': ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      width: {
        'btn-primary': '8.5rem' ,
        'spacing-large': '35rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
