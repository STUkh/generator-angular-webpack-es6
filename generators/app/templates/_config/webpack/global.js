'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var Manifest = require('manifest-revision-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var rootPublic = path.resolve('./src');
var NODE_ENV = process.env.NODE_ENV || "production";
var DEVELOPMENT = NODE_ENV === "production" ? false : true;
var stylesLoader = 'css?root=' + rootPublic + '&sourceMap!postcss!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true';

module.exports = function (_path) {
  var rootAssetPath = _path + 'src';

  var webpackConfig = {
    // entry points
    entry: {
      app: _path + '/src/app/index.bootstrap.js'
    },

    // output system
    output: {
      path: _path + '/dist',
      filename: '[name].js',
      publicPath: '/'
    },

    // resolves modules
    resolve: {
      extensions: ['.js', '.es6', '.jsx', '.scss', '.css'],
      alias: {
        _appRoot: path.join(_path, 'src', 'app'),
        _images: path.join(_path, 'src', 'app', 'assets', 'images'),
        _stylesheets: path.join(_path, 'src', 'app', 'assets', 'styles'),
        _scripts: path.join(_path, 'src', 'app', 'assets', 'js')
      }
    },

    // modules resolvers
    module: {
      noParse: [],
      loaders: [{
        test: /\.html$/,
        loaders: [
          {
            loader: 'ngtemplate',
            query: {
              relativeTo: path.join(_path, '/src')
            }
          }, {
            loader: 'html',
            query: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: [
          path.resolve(_path, "node_modules")
        ],
        loaders: [
          {
            loader: 'babel',
            query: {
              cacheDirectory: false
            }
          },
          'baggage?[file].html&[file].css'
        ]
      }, {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss'
        ]
      }, {
        test: /\.(scss|sass)$/,
        loader: DEVELOPMENT ? ('style!' + stylesLoader) : ExtractTextPlugin.extract({
          fallbackLoader: "style",
          loader: stylesLoader
        })
      }, {
        test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          {
            loader: 'url',
            query: {
              name: 'assets/fonts/[name]_[hash].[ext]'
            }
          }
        ]
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          {
            loader: 'url',
            query: {
              name: '/assets/images/[name]_[hash].[ext]',
              limit: 10000
            }
          }
        ]
      }
      ]
    },

    // load plugins
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          // PostCSS
          postcss: [autoprefixer({browsers: ['last 5 versions']})],
        }
      }),
      // new webpack.ProvidePlugin({
      //     <% if (props.jQuery) { %>
      //     $: 'jquery',
      //     jQuery: 'jquery',
      //     'window.jQuery': 'jquery',
      //     <% } %>
      //     <% if (props.moment) { %>
      //     moment: 'moment',
      //     'window.moment': 'moment',
      //     <% } %>
      //     <% if (props.lodash) { %>
      //     _: 'lodash',
      //     'window._': 'lodash'
      //     <% } %>
      // }),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
      new ExtractTextPlugin({
        filename: 'assets/styles/css/[name]' + (NODE_ENV === 'development' ? '' : '.[chunkhash]') + '.css',
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(_path, 'src', 'tpl-index.ejs')
      })
    ]
  };

  return webpackConfig;

};
