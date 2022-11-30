/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bgHero.png')"
      }
    }
  },
  plugins: []
}
