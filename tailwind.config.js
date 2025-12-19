/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(222 47% 11%)",
        foreground: "hsl(210 40% 98%)",

        card: "hsl(222 47% 15%)",
        "card-foreground": "hsl(210 40% 98%)",

        primary: "hsl(160 84% 39%)",
        "primary-foreground": "hsl(222 47% 11%)",

        secondary: "hsl(199 89% 48%)",
        "secondary-foreground": "hsl(210 40% 98%)",

        accent: "hsl(280 80% 60%)",
        "accent-foreground": "hsl(210 40% 98%)",

        muted: "hsl(222 47% 20%)",
        "muted-foreground": "hsl(215 20% 65%)",

        border: "hsl(222 47% 25%)",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}

