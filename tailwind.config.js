/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c39be",
        secondary: "#f2545b",
        success: "#6fd8bc",
        dark: "#303030",
        content: "#5c5c5c",
        accent: "#f6f7ff",
        light: "#fdfefe",
      },
      boxShadow: {
        DEFAULT: "0px 2px 16px rgba(0, 0, 0, 0.25);",
        card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}
