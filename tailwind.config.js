/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        cyber: {
          black: "#050505",    // Deep matte background
          dark: "#0a0a0a",     // Card background
          gray: "#171717",     // Border/Input background
          cyan: "#06b6d4",     // Primary Neon (Teal/Cyan)
          purple: "#a855f7",   // Secondary Neon
          text: "#e5e5e5",     // Body text
          muted: "#737373",    // Secondary text
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"], // Tech headings
        sans: ["'Inter'", "sans-serif"],         // Readable body
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.cyan.500"), 0 0 20px theme("colors.cyan.900")',
        'neon-purple': '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.900")',
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Ensure you installed this package
}