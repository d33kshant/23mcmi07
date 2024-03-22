/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,njk,md}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Noto Sans"],
      mono: ["Noto Sans Mono"]
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

