/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#FF7979',
        green: '#38CC8B',
        purple: '#5E54A4',
        black: '#3D3B48',
      },
      screens: {
        // Adding custom screen sizes
        desktop: '1440px',
        mobile: '375px',
      },
      boxShadow: {
        'inner-custom': 'inset 20px 10px 62px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
