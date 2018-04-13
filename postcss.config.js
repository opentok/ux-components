module.exports = {
    modules: true,
    plugins: [
        require("stylelint"),
        require('autoprefixer'),
        require('precss'),
        require('postcss-nested'),
        require('postcss-font-magician')({
            variants: {
                'Raleway': {
                    '300': [],
                    '400': [],
                    '700': []
                }
            }
        })
    ]
}