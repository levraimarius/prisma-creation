/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-indigo-600",
    "text-center",
    "sm:text-4xl",
    "animate-spin",
    "hidden",
  ],
};
