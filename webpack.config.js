
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/browser/index'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'react-hot' ],
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.tsx?$/,
      loaders: [ 'ts-loader' ],
      exclude: /(node_modules|bower_components)/
    }]
  },
  resolve: {
    extensions: [ '', '.js', '.ts', '.tsx' ]
  }
};
