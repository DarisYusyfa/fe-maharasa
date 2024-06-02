/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
/* eslint-disable no-undef */
