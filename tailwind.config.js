/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        bricolage: ["var(--font-hind)", "sans-serif"],
        hind: ["var(--font-hind)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0EA5E9",
        primaryLight: "#E0F2FE",
        primaryDark: "#0C4A6E",
        textColor: "#18181B",
      },
      boxShadow: {
        xl: "0 0 8px 2px #E0F2FE",
      },
      screens: {
        sm: "580px",
        md: "600px",
        lg: "980px",
        xl: "1280px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
