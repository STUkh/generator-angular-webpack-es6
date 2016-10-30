'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'cheap-source-map',
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
