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
        'Nunito': {
          '200': ['woff, woff2'],
          '300': ['woff, woff2'],
          '400': ['woff, woff2'],
          '700': ['woff, woff2']
        },
        'Inconsolata': {
          '400': ['woff, woff2'],
        }
      },
    }
  }
}