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
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#222222",
        white: "#FFFFFF",
        slate: {
          DEFAULT: "#e2e8f0",
          light: "#e2e8f0",
          dark: "#475569",
        },
        purple: {
          DEFAULT: "#6474b7",
          light: "#faf5ff",
          vibrant: "#5d6bc4",
        },
        teal: "#39c9d1",
        red: "#ec5b3e",
        green: "#bbe5b3",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
