/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font
        satoshi: ['Satoshi', 'sans-serif'], // Add Satoshi font here
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter'), // Ensure you have this if using the Inter font plugin
  ],
};
