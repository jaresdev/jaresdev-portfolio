/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: '#0C1117',
        bentoBackground: '#1A1A1A',
        cardBackground: '#1B1F22',
      },
      fontFamily: {
        onest: ['One Stroke', 'sans-serif'],
      },
      keyframes: {
        sayHello: {
          '0%': { transform: 'rotate(-12deg)' },
          '25%': { transform: 'rotate(35deg)' },
          '50%': { transform: 'rotate(-12deg)' },
          '75%': { transform: 'rotate(35deg)' },
          '100%': { transform: 'rotate(-12deg)' },
        },
      },
      animation: {
        sayHello: 'sayHello',
      },
    },
  },
  plugins: [],
}
