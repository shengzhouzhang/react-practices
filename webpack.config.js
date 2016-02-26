
var path = require('path');

module.exports = {
  output: {
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
