import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
       screens: {
        xl2: '1200px', // ✅ NEW breakpoint
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },

  plugins: [tailwindcss(), react()],
})


