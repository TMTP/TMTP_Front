/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: { min: "0px", max: "350px" },
      sm: { min: "350px", max: "720px" },
      md: { min: "721px", max: "1080px" },
      lg: { min: "1081px", max: "1440px" },
      xl: { min: "1441px", max: "1920px" },
      xxl: { min: "1921px" },
    },
  },
  plugins: [],
};
