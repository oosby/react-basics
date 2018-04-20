const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bin'),
          path.resolve(__dirname, 'mocks'),
          path.resolve(__dirname, 'build'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.jcss?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bin'),
          path.resolve(__dirname, 'mocks'),
          path.resolve(__dirname, 'build'),
        ],
      },
    ],
  },
  devtool: "source-map",
  target: "web",
  plugins: [
    new CopyWebpackPlugin([
    {
      from: path.join(__dirname, 'styles.css'),
      to: path.join(__dirname, 'build/styles.css')
    }])
  ],
}