'use strict';

// Depends
var path              = require('path');
var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer-core');
var Manifest          = require('manifest-revision-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var NODE_ENV = process.env.NODE_ENV || "production";
var DEVELOPMENT  = NODE_ENV === "production" ? false : true;
var stylesLoader = 'css-loader?sourceMap!postcss-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true';


module.exports = function(_path) {
  var rootAssetPath = _path + 'src';

  var webpackConfig = {
    // entry points
    entry: {
      vendor: _path + '/src/app/index.vendor.js',
      app: _path + '/src/app/index.bootstrap.js'
    },

    // output system
    output: {
      path: 'dist',
      filename: '[name].js',
      publicPath: '/'
    },

    // resolves modules
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['node_modules'],
      alias: {
        _appRoot:     path.join(_path, 'src', 'app'),
        _images:      path.join(_path, 'src', 'app', 'assets', 'images'),
        _stylesheets: path.join(_path, 'src', 'app', 'assets', 'styles'),
        _scripts:     path.join(_path, 'src', 'app', 'assets', 'js')
      }
    },

    // modules resolvers
    module: {
      noParse: [],
      loaders: [{
        test: /\.html$/,
        loaders: [
          'ngtemplate-loader?relativeTo='+ _path,
          'html-loader?attrs[]=img:src&attrs[]=img:data-src'
        ]
      }, {
        test: /\.js$/,
        loaders: [
          'baggage-loader?[file].html&[file].css',
          'ng-annotate-loader',
          'babel-loader'
        ]
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader'
        ]
      }, {
        test: /\.(scss|sass)$/,
        loader: DEVELOPMENT ? ('style-loader!' + stylesLoader) : ExtractTextPlugin.extract('style-loader', stylesLoader)
      }, {
        test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          "url-loader?name=assets/fonts/[name]_[hash].[ext]"
        ]
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'url-loader?name=assets/images/[name]_[hash].[ext]&limit=10000'
        ]
      }, {
        test: require.resolve("angular"),
        loaders: [
          "expose?angular"
        ]
      },
      <% if (props.jQuery.package) { %>
      {
        test: require.resolve("jquery"),
        loaders: [
          "expose?$",
          "expose?jQuery"
        ]
      }
      <% } %>
      ]
    },

    // post css
    postcss: [autoprefixer({ browsers: ['last 5 versions'] })],

    // load plugins
    plugins: [
      //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|hu/),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin({
        moveToParents: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        async: true,
        children: true,
        minChunks: Infinity
      }),
      new Manifest(path.join(_path + '/config', 'manifest.json'), {
        rootAssetPath: rootAssetPath,
        ignorePaths: ['.DS_Store']
      }),
      new ExtractTextPlugin('assets/styles/css/[name]' + (NODE_ENV === 'development' ? '' : '.[chunkhash]') + '.css', { allChunks: true }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(_path, 'src', 'tpl-index.html')
      })
    ]
  };

  if (NODE_ENV !== 'development') {
    webpackConfig.plugins = webpackConfig.plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        warnings: false,
        sourceMap: true
      })
    ]);
  }

  return webpackConfig;

};
