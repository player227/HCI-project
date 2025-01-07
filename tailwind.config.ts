import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          light: "var(--light-gray)",
          dark: "var(--dark-gray)",
        },
        red: {
          logo: "var(--logo-red)",
        },
        blue: {
          logo: "var(--logo-blue)",
        },
        yellow: {
          logo: "var(--logo-yellow)",
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
