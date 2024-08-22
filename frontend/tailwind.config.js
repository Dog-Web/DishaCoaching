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
    },
  },
  plugins: [],
}

