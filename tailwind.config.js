/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      margin: {
        "1/2": "50%",
        "3/4": "75%",
      },
      keyframes: {
        floatUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "spin-vertical": {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        float: "floatUpDown 5s ease-in-out infinite",
        "spin-vertical": "spin-vertical 5s linear infinite",
      },
      colors: {
        "custom-green-text": {
          50: "#71EB6C",
        },
        "jagged-ice": {
          50: "#f0fbfa",
          100: "#d8f5f5",
          200: "#bbecec",
          300: "#84dbdc",
          400: "#4bc2c5",
          500: "#2fa6ab",
          600: "#2a8790",
          700: "#286d76",
          800: "#285a62",
          900: "#254c54",
          950: "#143238",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".input-reset": {
          "@apply appearance-none border-0 focus:outline-none bg-transparent": {},
        },
      });
    },
  ],
};
