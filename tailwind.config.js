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
        'cyan-blue': {
          600: '#3F4352',
        },
      },
      spacing: {
        '4px': '4px',
        '8': '2rem',
        '16': '4rem',
        'xss': '5rem',
      },
      minHeight: {
        '128': '32rem',  // cria uma classe min-h-128 com altura mínima de 32rem
      },
    },
  },
  plugins: [],
};
