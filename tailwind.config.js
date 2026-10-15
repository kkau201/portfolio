/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oatmeal: "#F9F0EE",
        guava: "#FFA9C2",
        tangerine: "#F55937",
        blueberry: "#465AE1",
        strawberry: "#FF87EB",
        lime: "#D2D640",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1080px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(70, 90, 225, 0.08)",
      },
    },
  },
  plugins: [],
};
