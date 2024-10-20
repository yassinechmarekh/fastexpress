/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../assets/images/hero/hero-background.webp')",
      }
    },
  },
  plugins: [],
}

