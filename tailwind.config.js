/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  layers: {
    // enable the layers you want to use
    base: true,
    components: true,
    utilities: true,
  },
  plugins: [],
}

