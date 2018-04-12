const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    loader: require.resolve("awesome-typescript-loader")
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './postcss.config.js'
          }
        }
      }
    ]
  });
  defaultConfig.plugins.push(
    new TSDocgenPlugin()
  );
  defaultConfig.resolve.extensions.push(".js", ".ts", ".tsx", ".css");
  return defaultConfig;
};
