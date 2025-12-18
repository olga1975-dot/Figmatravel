/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#0b132b",
        bg2: "#0f1c3f",
        bg3: "#020617",
        accent: "#14b8a6",
        accent2: "#22d3ee",
        warm: "#f59e0b",
      },
    },
  },
  plugins: [],
};
