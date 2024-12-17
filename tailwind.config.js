/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wordpress: {
          DEFAULT: "#21759b",
          50: "#e6f3f7",
          100: "#cce7ef",
          200: "#99cfdf",
          300: "#66b7cf",
          400: "#339fbf",
          500: "#21759b",
          600: "#1a5e7c",
          700: "#14465d",
          800: "#0d2f3e",
          900: "#07171f",
        },
        custom: {
          DEFAULT: "#4f46e5",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#4f46e5",
          600: "#4338ca",
          700: "#3730a3",
          800: "#312e81",
          900: "#1e1b4b",
        },
      },
    },
  },
  plugins: [],
};
