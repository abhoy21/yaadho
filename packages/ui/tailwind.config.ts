import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./apps/**/*.{js,ts,jsx,tsx}", "./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#020708",
        background: "#f4fafc",
        primary: "#47b2cb",
        secondary: "#9494e0",
        accent: "#8b6cd5",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
