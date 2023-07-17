/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["inter", "helvetica"],
    },
    extend: {
      // Colors
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#FFFFFF",
      },
      // Screens
      screens: {
        wide: { max: "1599px" },
        desktop: { max: "1439px" },
        laptop: { max: "1199px" },
        tablet: { max: "1079px" },
        mobile: { max: "749px" },
        "mobile-sm": { max: "500px" },
        "touch-device": { raw: "(hover: none) and (pointer: coarse)" },
      },
      // Spacing
      spacing: {
        xxs: "2px",
        xs: "4px",
        sm: "8px",
        md: "10px",
        lg: "20px",
        xl: "40px",
        "2xl": "60px",
        "3xl": "80px",
        "4xl": "100px",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
