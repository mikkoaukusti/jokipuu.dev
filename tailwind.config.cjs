/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        // Quicksand Font License: SIL Open Font License, 1.1 (https://fonts.google.com/attribution)
      },
    },
  },
  plugins: [],
};
