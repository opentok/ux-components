module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'autoprefixer': {},
    'postcss-assets': {
      basePath: './src',
      loadPaths: ['**']
    },
    'postcss-nested': {},
    'precss': {},
    'stylelint': {},
  }
}