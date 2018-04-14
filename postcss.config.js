module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'autoprefixer': {},
    'postcss-assets': {
      basePath: './src',
      loadPaths: ['**']
    },
    'postcss-nested': {},
    'stylelint': {},
    'precss': {},
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
    }
  }
}