module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'stylelint': {},
        'precss': {},
        'postcss-nested': {},
        'postcss-font-magician': {
            variants: {
                'Raleway': {
                    '300': [],
                    '400': [],
                    '700': []
                }
            }
        },
    }
}