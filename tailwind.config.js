/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
    },
  },
  plugins: [],
};
