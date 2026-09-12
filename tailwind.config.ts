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
          navy: "#071f4d",
          blue: "#04599f",
          sky: "#e9f4ff",
          gold: "#f7b500",
          ink: "#102033"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(7, 31, 77, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
