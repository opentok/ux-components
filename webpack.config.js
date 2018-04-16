const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "opentok-ux-components",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('typings-for-css-modules-loader'),
            options: {
              modules: true,
              namedExport: true,
              banner: "/* This file is generated during the webpack build. Please do not edit/remove. */",
              localIdentName: '[name]__[local]'
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              config: {
                path: './postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", "png", ".svg", "jpg"],
  }
};
