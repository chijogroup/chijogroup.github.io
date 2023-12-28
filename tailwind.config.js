module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_pages/**/*.html',
      './_posts/*.md',
      './*.html',
    ],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ],
    theme: {
      fontFamily: {
        brand: ['Fredoka One', 'cursive']
      }
    }
}