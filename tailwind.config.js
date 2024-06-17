/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        rw: "210mm",
      },
      height: {
        main: "91vh",
        rh: "297mm",
      },
      fontFamily: {
        inter: ["Inter, sans-serif"],
        pop: ["Poppins , sans-serif"],
        mont: ["Montserrat, sans-serif"],
        rubik: ["Rubik, sans-serif"],
        lato: ["Lato, sans-serif"],
      },
      color: {
        gray: "#2e2e2e",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
