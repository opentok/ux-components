module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'stylelint': {},
    'precss': {},
    'postcss-nested': {},
    'postcss-font-magician': {
      foundries: ['google'],
      variants: {
        'Raleway': {
          '300': [],
          '400': [],
          '700': []
        },
        'Pacifico': {
          '400': [],
        }
      },
    },
  }
}