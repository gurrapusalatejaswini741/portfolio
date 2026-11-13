/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0B0B12", panel: "#14141F", cloud: "#EDEAF5", violet: "#7C5CFF", ember: "#FF8A3D" },
      fontFamily: {
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
