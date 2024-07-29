/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonYellow: '#FFFF00', // Custom neon yellow color
      },
    },
  },
  plugins: [require("daisyui")],
};
