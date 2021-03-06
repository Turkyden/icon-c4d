module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6a00'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
