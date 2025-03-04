/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          800: '#0277bd',
          900: '#01579b',
        },
        'dark-gray': {
          600: '#575757',
          700: '#333333',
          800: '#2E2E2E',
          900: '#1A1A1A',
        },
      },
      spacing: {
        '4px': '4px',
        '8': '2rem',
        '16': '4rem',
        'xss': '5rem',
      }
    },
  },
  plugins: [],
};
