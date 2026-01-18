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
  lg: '1024px',
  xl2: '1200px',
  '2xl': '1920px',
},
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },

  plugins: [tailwindcss(), react()],
})


