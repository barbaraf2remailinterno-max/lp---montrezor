import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "evler-navy": "#0B1E3E",
        "evler-orange": "#F05A1A",
        "evler-cream": "#F5F0E8",
        "evler-gold": "#C8A96A",
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "Raleway", "sans-serif"],
        display: ["var(--font-league-spartan)", "League Spartan", "sans-serif"],
      },
      animation: {
        "count-up": "countUp 1.5s ease-out forwards",
        "check-scale": "checkScale 0.4s ease-out forwards",
        "slide-left": "slideLeft 0.28s ease-in-out",
        "slide-right": "slideRight 0.28s ease-in-out",
        "fade-in": "fadeIn 0.28s ease-in-out",
      },
      keyframes: {
        countUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        checkScale: {
          from: { transform: "scale(0)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        slideLeft: {
          from: { transform: "translateX(40px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          from: { transform: "translateX(-40px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
