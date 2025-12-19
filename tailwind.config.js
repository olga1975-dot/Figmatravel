/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a1020",
        foreground: "#e5e7eb",

        card: "#111827",
        border: "#1f2937",

        primary: "#34d399",
        secondary: "#38bdf8",
        accent: "#a78bfa",

        muted: "#9ca3af",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
