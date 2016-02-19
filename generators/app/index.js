'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the great ' + chalk.red('generator-angular-webpack-es6') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your application name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'confirm',
      name: 'bootstrap',
      message: 'Would you like to include Bootstrap for Sass?',
      default: true
    },
    //  {
    //  type: 'checkbox',
    //  name: 'modules',
    //  message: 'Which modules would you like to include?',
    //  choices: [
    //    {
    //      value: 'animate',
    //      name: 'angular-animate.js',
    //      checked: true
    //    }, {
    //      value: 'aria',
    //      name: 'angular-aria.js',
    //      checked: false
    //    }, {
    //      value: 'cookies',
    //      name: 'angular-cookies.js',
    //      checked: true
    //    }, {
    //      value: 'resource',
    //      name: 'angular-resource.js',
    //      checked: true
    //    }, {
    //      value: 'messages',
    //      name: 'angular-messages.js',
    //      checked: false
    //    }, {
    //      value: 'sanitize',
    //      name: 'angular-sanitize.js',
    //      checked: true
    //    }, {
    //      value: 'touch',
    //      name: 'angular-touch.js',
    //      checked: false
    //    }
    //  ]
    //}
    ];

    this.prompt(prompts, function (answers) {
      this.props = answers;
      // To access props later use this.props.someOption;

      if (this.props.bootstrap) {
        this.npmInstall(['bootstrap-sass'], { 'save': true });
      }

      done();
    }.bind(this));
  },

  writing: function () {
    mkdirp("src");
    mkdirp("src/assets");
    mkdirp("src/assets/images");
    mkdirp("src/assets/js");

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
        this.templatePath('_config/**/*'),
        this.destinationPath('config/')
    );

    this.fs.copy(
      this.templatePath('_src/_favicon.ico'),
      this.destinationPath('src/favicon.ico')
    );
    this.fs.copy(
      this.templatePath('_src/_tpl-index.html'),
      this.destinationPath('src/tpl-index.html')
    );
    this.fs.copyTpl(
      this.templatePath('_src/_assets/_styles/_sass/_index.scss'),
      this.destinationPath('src/assets/styles/sass/index.scss'), {
          bootstrap: this.props.bootstrap
      }
    );

    this.fs.copyTpl(
      this.templatePath('_src/_app/_index.bootstrap.js'),
      this.destinationPath('src/app/index.bootstrap.js'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_src/_app/_index.module.js'),
      this.destinationPath('src/app/index.module.js'), {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('_src/_app/_index.components.js'),
      this.destinationPath('src/app/index.components.js')
    );
    this.fs.copy(
      this.templatePath('_src/_app/_index.config.js'),
      this.destinationPath('src/app/index.config.js')
    );
    this.fs.copy(
      this.templatePath('_src/_app/_index.routes.js'),
      this.destinationPath('src/app/index.routes.js')
    );
    this.fs.copy(
      this.templatePath('_src/_app/_index.run.js'),
      this.destinationPath('src/app/index.run.js')
    );
    this.fs.copy(
      this.templatePath('_src/_app/_index.vendor.js'),
      this.destinationPath('src/app/index.vendor.js')
    );

    this.fs.copy(
      this.templatePath('_src/_app/_components/_footer/**/*'),
      this.destinationPath('src/app/components/footer')
    );

    this.fs.copy(
      this.templatePath('_src/_app/_core/core.module.js'),
      this.destinationPath('src/app/core/core.module.js')
    );

    this.fs.copy(
      this.templatePath('_src/_app/_core/_directives/**/*'),
      this.destinationPath('src/app/core/directives')
    );

    this.fs.copy(
      this.templatePath('_src/_app/_core/_services/**/*'),
      this.destinationPath('src/app/core/services')
    );

    this.fs.copy(
      this.templatePath('_src/_app/_pages/**/*'),
      this.destinationPath('src/app/pages')
    );
    

    
  },

  install: function () {
    this.npmInstall();
  }
});
