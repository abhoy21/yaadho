import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        text: "#2d2d2d",
        background: "#f4fafc",
        primary: "#47b2cb",
        secondary: "#9494e0",
        accent: "#8b6cd5",
        danger: "#e3342f",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
