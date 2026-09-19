import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#06261f",
          blue: "#0f5a46",
          sky: "#eef7ee",
          gold: "#d89b2a",
          ink: "#10231f"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(6, 38, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
