const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
              configFileName: './.storybook/tsconfig.json'
            }
          },
          { loader: require.resolve('react-docgen-typescript-loader') }
        ]
      },
      {
        test: /\.css$/,
        include: [SRC_PATH],
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
    }),
    new TSDocgenPlugin()
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../.storybook/tsconfig.json'),
      })
    ]
  }
};
