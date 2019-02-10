const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: [path.resolve(__dirname, 'src/main.ts')]
  },
  output: {
    filename: 'angry-recruits.js',
    path: path.resolve(__dirname, 'bin')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};