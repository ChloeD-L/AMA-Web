import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "400": "4.0", // Custom scale value of 115%
        "300": "3.0", // Custom scale value of 115%
        "200": "2.0", // Custom scale value of 115%
      },
      boxShadow: {
        "footer-custom": "0 -2px 5px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "random-bounce": "random-bounce 5s infinite",
      },
      keyframes: {
        "random-bounce": {
          "0%, 100%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(200px, -200px)" },
          "40%": { transform: "translate(400px, -400px)" },
          "60%": { transform: "translate(200px, -200px)" },
          "80%": { transform: "translate(-200px, -200px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#E34895", // Pink
        secondary: "#3FBEE1", // Blue
        tertiary: "#86C248", // Green
        "primary-blur": "#EE91BF",
        "secondary-blur": "#82D5EB",
      },
      fontSize: {
        h1: "10rem", // 定义 h1 的全局字体大小
      },
      screens: {
        sm: "480px", // small screen
        md: "768px", // tablets and small laptops
        mi: "1024px", // medium screens, laptops
        lg: "1200px", // desktops
        xlg: "1440px", // extra large screens, tv
      },
    },
  },
  plugins: [],
};
export default config;
