module.exports = {
  mode: 'jit',
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.{vue,js,ts}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'grey': '#F2F2F2',
      'pink': '#F257D8',
      'paradise-pink': '#DC485A',
      'light-purple': '#BC6BF2',
      'dark-purple': '#7C1ED9',
      'navy-blue': '#282140',
      'super-red': '#C7302B',
      'green': '#27AE60',
      'transparent': 'transparent',
    },
    extend: {
      rotate: {
        '135': '135deg',
      },
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      scale: {
        '200': '2',
      }
    }
  },
  plugins: [],
}
