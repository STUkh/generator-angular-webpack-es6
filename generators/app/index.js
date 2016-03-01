'use strict';

var yeoman = require('yeoman-generator').Base;
var yosay = require('yosay');
var chalk = require('chalk');
var pkg = require('../../package.json');

var AngularWebpackES6Generator = yeoman.extend({

    greeting: function () {
        this.log(yosay(
            'Welcome to the great ' + chalk.red('angular-webpack-es6') + ' generator!'
        ));
    },

    constructor: function () {
        yeoman.apply(this, arguments);

        // Define arguments
        this.argument('appName', {
            type: String,
            required: false
        });

        this.version = pkg.version;

        this.props = {};
    }

  });


require('./src/prompts')(AngularWebpackES6Generator);
require('./src/modules')(AngularWebpackES6Generator);
require('./src/files')(AngularWebpackES6Generator);
require('./src/install')(AngularWebpackES6Generator);


module.exports = AngularWebpackES6Generator;