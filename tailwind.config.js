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
      backgroundImage: {
        'profile-picture': "url('/public/profile.jpg')",
      },
      fontFamily: {
        onest: ['One Stroke', 'sans-serif'],
      },
      keyframes: {
        sayHello: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(35deg)' },
        },
      },
      animation: {
        sayHello: 'sayHello .6s ease-in-out',
      },
    },
  },
  plugins: [],
}
