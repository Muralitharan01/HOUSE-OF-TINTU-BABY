import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2D4A3E",
          secondary: "#426B59",
          accent: "#D97745",
          warm: "#F4C794",
          gold: "#D4AF37",
        },
        hot: {
          bg: "#FFF9F2",
          surface: "#FFFFFF",
          card: "#FFFDF9",
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['DM Serif Display', 'Georgia', 'serif'],
        script: ['Sacramento', 'cursive'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        ui: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '48px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(45, 74, 62, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03)',
        'float': '0 16px 45px rgba(45, 74, 62, 0.14), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 50px rgba(217, 119, 69, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
