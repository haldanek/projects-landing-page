/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust to match your file paths
    './public/index.html',
  ],
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  plugins: [],
};
