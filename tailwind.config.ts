import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist)"],
      },
      animation: {
        draw: "draw 2s ease-in-out infinite",
      },
      keyframes: {
        draw: {
          "0%": { strokeDashoffset: "300", opacity: "0" },
          "50%": { strokeDashoffset: "150", opacity: "0.5" },
          "100%": { strokeDashoffset: "300", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
