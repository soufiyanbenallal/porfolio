// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        one: ['SecularOne-Regular', 'sans-serif'],
        cookie: ['cookie', 'sans-serif'],
        // one: ['Brogte', 'sans-serif'],

      },
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#323232',
          900: '#0c0c0d',
          1000: '#0A0A0A',
        },
        red:{
          hover:'#b50841',
          base: '#f70656',
          // 700: '#c30620',
          // 800: '#c30620',
          // 900: '#c30620',


        }
      },
      minHeight: {
        md: '500px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
};
