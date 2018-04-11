const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // library: 'opentokReactComponents'
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"]
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [

      //     'style-loader',
      //     {
      //       loader: 'typings-for-css-modules-loader',
      //       options: {
      //         modules: true,
      //         namedExport: true,
      //         // banner: true,
      //         localIdentName: '[name]__[local]'
      //       }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         ident: 'postcss',
      //         plugins: [
      //           require('autoprefixer')()
      //         ],
      //         sourceMap: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   include: path.join(__dirname, 'src/components'),
      //   use: [
      //     'style-loader',
      // {
      //   loader: 'typings-for-css-modules-loader',
      //   options: {
      //     modules: true,
      //     namedExport: true,
      //     // banner: true,
      //     localIdentName: '[name]__[local]'
      //   }
      // },
      //     // 'postcss-loader'
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         config: {
      //           path: path.join(__dirname, './postcss.config.js')
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.tsx?$/,
      //   loader: "awesome-typescript-loader"
      // },
      // {
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [{
      //       loader: 'typings-for-css-modules-loader',
      //       options: {
      //         modules: true,
      //         namedExport: true,
      //         // banner: true,
      //         localIdentName: '[name]__[local]'
      //       }
      //     }]
      //   })
      // },
      {
        test: /\.css$/,
        include: [path.join(__dirname, './src/components')],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              importLoaders: 1,
              // banner: true,
              localIdentName: '[name]__[local]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, './postcss.config.js')
              }
            }
          }]
        })
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          silent: true,
          // transpileOnly: true,
          useBabel: true,
          // useCache: false,
          // cacheDirectory: path.join(__dirname, '.cache')
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ])
  ]
};