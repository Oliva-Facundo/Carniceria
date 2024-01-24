/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        bluePrimary: "#041C74",
        redPrimary: "#DC0506",
      },
    },
  },
  plugins: [],
};
