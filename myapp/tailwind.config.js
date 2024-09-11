/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Sarabun: ["Sarabun", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
        Mitr: ["Mitr", "sans-serif"],
        Charm: ["Charm"],
        Handjet: ["Handjet"]
      }
      
    },
  },
  plugins: [],
}

