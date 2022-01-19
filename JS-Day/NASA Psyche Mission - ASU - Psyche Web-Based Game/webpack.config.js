const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
    vendor: ['phaser'],
  },
  devtool: argv.mode === 'development' ? 'cheap-module-eval-source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: argv.mode === 'production',
          },
        },
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: argv.mode === 'development',
      WEBGL_RENDERER: true,
      CANVAS_RENDERER: true,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
    ]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['vendor', 'app'],
      chunksSortMode: 'manual',
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
});
