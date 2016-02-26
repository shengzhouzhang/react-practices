
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './dist/src/browser/index'
  ],
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'react-hot' ],
      exclude: /(node_modules|bower_components)/
    }]
  }
};
