import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      'animation': {
        'random-bounce':'random-bounce 5s infinite',
      },
      keyframes:{
        'random-bounce': {
          '0%, 100%': { transform: 'translate(0,0)'},
          '20%': { transform: 'translate(50px, -50px)'},
          '40%': { transform: 'translate(100px, -100px)'},
          '60%': { transform: 'translate(150px, -150px)'},
          '80%': { transform: 'translate(-50px, -40px)'}
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        'primary': '#E34895',
        'secondary': '#3FBEE1',
        'tertiary': '#86C248',
        'primary-blur': '#EE91BF',
        'secondary-blur': '#82D5EB',
      },
      fontSize: {
        'h1': '10rem', // 定义 h1 的全局字体大小
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
