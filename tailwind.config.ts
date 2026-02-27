import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E07A2F",
          light: "#F0983F",
          dark: "#C06A20",
        },
        secondary: {
          DEFAULT: "#2E7D32",
          light: "#4CAF50",
          dark: "#1B5E20",
        },
        accent: {
          DEFAULT: "#D4A843",
          light: "#E0C068",
          dark: "#B8902A",
        },
        surface: {
          light: "#FAFAF5",
          card: "#F5F0E8",
          dark: "#121212",
          "dark-card": "#1E1E2A",
        },
        text: {
          dark: "#1A1A2E",
          light: "#FAFAF5",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans Devanagari",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
