module.exports = {
    modules: true,
    plugins: [
        require("stylelint")({}),
        require('precss'),
        require('postcss-simple-vars'),
        require('autoprefixer'),
        require('postcss-nested'),
    ]
}
