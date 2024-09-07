/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'light-purple': '#f4f0fc',
        'dark-purple': '#6a0dad',
        'grayish-purple': '#b5a7d4',
        'dark-gray': '#333',
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '70%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

