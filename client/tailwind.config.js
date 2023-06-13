/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  // mode: Sets the mode to "jit" (Just-In-Time compilation), which improves build performance and allows for on-demand CSS generation.
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      // boxShadow: Adds a custom boxShadow utility class named card with the specified box shadow properties.
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/other/herobg.png')",
      },
    },
  },
  plugins: [],
};
