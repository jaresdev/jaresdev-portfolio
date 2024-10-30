/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0C1117',
        bentoBackground: '#1A1A1A',
        cardBackground: '#1B1F22',
      },
    },
  },
  plugins: [],
}
