/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-menu-blue": "#0c162d",
        "app-header-blue": "#0c162e",
        "app-content-blue": "#172237",
      },
    },
  },
  plugins: [],
};
