/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#000000",
        whiteColor: "#FFFFFF",
        yellowColor: "#FFFD00",
        redColor: "#F50000",
        pinkColor: "#F31BFF",
        blueColor: "#001FFF",
        skyColor: "#53FFFF",
        greenColor: "#5BFE00",
      },
    },
  },
  plugins: [],
};
