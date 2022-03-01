module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "raisin": "#110F10",
        "raisin-light": "#201B1D",
        "outor": "#FC7752",
        "celadon": "#80A7",
        "mint": "#3DDC97",
        "lemon": "#FFFFB2"
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
