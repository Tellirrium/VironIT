const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    port: 3000
  }
};