const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: [
    path.join(__dirname, '/client/components/index.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
  }
}
