/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        shadow: "#E5E8EB",
        offwhite: "#F5F2F0",
      },
    },
  },
  plugins: [],
}

