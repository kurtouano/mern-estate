/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#222831", // Adding the custom color
        DarkGray: "#393E46",
        Cyan: "#00ADB5",
        OffWhite: "#EEEEEE",
      },
    },
  },
  plugins: [],
}

