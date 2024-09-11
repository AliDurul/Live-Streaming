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
        primary: {
          DEFAULT: '#10BED4',
          light: '#00D0CB',
          dark: '#0A8D93'
        },

      },

      backgroundImage: {
        'hero-gradient': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url('/images/hero.jpg')",
      },

    },

  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
