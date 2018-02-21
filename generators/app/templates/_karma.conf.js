var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rootPublic = path.resolve('./src');
var DEVELOPMENT =  true;
var stylesLoader = 'css-loader?root=' + rootPublic + '&sourceMap!postcss-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true';

module.exports = function (config) {
    config.set({
      // base path used to resolve all patterns
      basePath: '',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],

      // list of files/patterns to load in the browser
      files: [{ pattern: 'spec.bundle.js', watched: false }],

      // files to exclude
      exclude: [],

      plugins: [
        require("karma-phantomjs-launcher"),
        require("karma-jasmine"),
        require("karma-sourcemap-loader"),
        require("karma-webpack")
      ],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },

      webpack: {
        devtool: 'inline-source-map',
        module: {
          loaders: [{
            test: /\.html$/,
            use: [
                {
                  loader: 'ngtemplate-loader',
                  options: {
                    relativeTo: path.join(__dirname, '/src')
                  }
                },
                {
                  loader: 'html-loader',
                  options: {
                    attrs: ['img:src', 'img:data-src']
                  }
                }
            ]
          }, {
            test: /\.js$/,
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            enforce: 'pre',
            use: [
              {
                loader: 'eslint-loader'
              }
            ]
          }, {
            test: /\.js$/,
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: false
                }
              },
              {
                loader: 'baggage-loader?[file].html&[file].css'
              }
            ]
          }, {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader?sourceMap'
              },
              {
                loader: 'postcss-loader'
              }
            ]
          }, {
            test: /\.(scss|sass)$/,
            loader: DEVELOPMENT ? ('style-loader!' + stylesLoader) : ExtractTextPlugin.extract({
              fallbackLoader: "style-loader",
              loader: stylesLoader
            })
          }, {
            test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: 'assets/fonts/[name]_[hash].[ext]'
                }
              }
            ]
          }, {
            test: /\.(jpe?g|png|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: 'assets/images/[name]_[hash].[ext]',
                  limit: 10000
                }
              }
            ]
          }
          ]
        }
      },

      webpackServer: {
        noInfo: true // prevent console spamming when running in Karma!
      },

      // web server port
      port: 9876,

      // enable colors in the output
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // toggle whether to watch files and rerun tests upon incurring changes
      autoWatch: false,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],

      // if true, Karma runs tests once and exits
      singleRun: false
    });
  };
