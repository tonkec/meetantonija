module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF944E',
        secondary: '#333A47',
        ternary: '#EEF1F1',
        gray: '#7F91AA',
        black: '#050A30',
        green: '#005246',
        brown: '#FFE8D1',
        orange: '#FF944E',
        red: '#A26F51',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
