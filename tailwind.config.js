/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",      // small phones
        md: "768px",      // tablets
        lg: "1024px",     // laptops
        xl: "1280px",     // large laptops
        xl2: "1440px",    // Figma / design screens
        xxl: "1700px",    // ✅ custom breakpoint
        "2xl": "1920px",  // full HD / large monitors
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
}
