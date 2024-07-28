/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "custom-1100":'1100px',
        "custom-700":'700px'
      }
    },
  },
  plugins: [],
}