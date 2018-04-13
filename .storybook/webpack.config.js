const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

// module.exports = (baseConfig, env, defaultConfig) => {
//   defaultConfig.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     include: [SRC_PATH, STORIES_PATH],
//     use: [{
//       loader: "awesome-typescript-loader",
//     }],
//   });
//   defaultConfig.module.rules.push({
//     test: /\.css$/,
//     include: [SRC_PATH],
//     use: [
//       MiniCssExtractPlugin.loader,
//       {
//         loader: require.resolve('css-loader'),
//         options: {
//           modules: true,
//           importLoaders: 1,
//           localIdentName: '[name]__[local]'
//         }
//       },
//       {
//         loader: require.resolve('postcss-loader'),
//         options: {
//           config: {
//             path: path.resolve(__dirname, './postcss.config.js')
//           }
//         }
//       }
//     ]
//   });
//   defaultConfig.plugins.push(new TSDocgenPlugin());
//   defaultConfig.plugins.push(new MiniCssExtractPlugin({
//     filename: "[name].css",
//     chunkFilename: "[id].css"
//   }));
//   defaultConfig.resolve.plugins = [(
//     new TsconfigPathsPlugin({
//       configFile: path.resolve(__dirname, '../.storybook/tsconfig.json'),
//     })
//   )];
//   defaultConfig.resolve.extensions.push(".js", ".ts", ".tsx", ".css");
//   return defaultConfig;
// };

// const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: "./src/index.ts",
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "index.js"
  // },
  // mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        include: [SRC_PATH, STORIES_PATH],
        options: {
          configFileName: './.storybook/tsconfig.json'
        }
      },
      {
        test: /\.css$/,
        include: [SRC_PATH],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
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
    extensions: [".js", ".ts", ".tsx", ".css"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../.storybook/tsconfig.json'),
      })
    ]
  }
};
