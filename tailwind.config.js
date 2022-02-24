module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
