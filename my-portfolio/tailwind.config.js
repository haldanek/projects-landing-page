/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // <-- Add this line
    './components/**/*.{js,ts,jsx,tsx}', // Optional: include component folder
    './pages/**/*.{js,ts,jsx,tsx}', // If you're mixing old pages too
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
