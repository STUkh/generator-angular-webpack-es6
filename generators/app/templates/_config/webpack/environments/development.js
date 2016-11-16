'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      info: true,
      hot: true,
      inline: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};
