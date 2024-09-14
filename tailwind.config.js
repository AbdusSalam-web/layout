/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "system-ui"],
      Inter: ["Inter", "sans - serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
