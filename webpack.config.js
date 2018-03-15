const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
          path.resolve(__dirname, 'bin')
        ],
        loader: 'babel-loader',
      },
    ],
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  
  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  devServer: {
    outputPath: path.join(__dirname, 'build'),
    port: 4444,
    historyApiFallback: true,
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: false,
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'index.html'),
      to: path.join(__dirname, 'build/index.html')
    },
    {
      from: path.join(__dirname, 'styles.css'),
      to: path.join(__dirname, 'build/styles.css')
    }])
  ],
}