module.exports = {
    modules: true,
    plugins: [
        require("stylelint"),
        require('autoprefixer'),
        require('precss'),
        require('postcss-nested')
    ]
}
