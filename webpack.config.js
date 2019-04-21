var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/www');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: APP_DIR + '/report.js',
  output: {
    path: BUILD_DIR,
    filename: 'frontend.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
