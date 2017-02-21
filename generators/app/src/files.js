'use strict';

var mkdirp = require('mkdirp');

module.exports = function (AngularWebpackES6Generator) {

    AngularWebpackES6Generator.prototype.copyFiles = function copyFiles() {
        mkdirp("src");
        mkdirp("src/assets");
        mkdirp("src/assets/images");
        mkdirp("src/assets/js");

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            this
        );
        this.fs.copyTpl(
            this.templatePath('_webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            this
        );
        this.fs.copyTpl(
            this.templatePath('_postcss.config.js'),
            this.destinationPath('postcss.config.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_.gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('_.babelrc'),
            this.destinationPath('.babelrc')
        );

        this.fs.copyTpl(
            this.templatePath('_config/**/*'),
            this.destinationPath('config/'),
            this
        );

        this.fs.copy(
            this.templatePath('_src/_favicon.ico'),
            this.destinationPath('src/favicon.ico')
        );
        this.fs.copy(
            this.templatePath('_src/_tpl-index.ejs'),
            this.destinationPath('src/tpl-index.ejs')
        );
        this.fs.copyTpl(
            this.templatePath('_src/_assets/_styles/_sass/_index.scss'),
            this.destinationPath('src/assets/styles/sass/index.scss'),
            this
        );
        this.fs.copy(
            this.templatePath('_src/_assets/_images/**/*'),
            this.destinationPath('src/assets/images')
        );
        this.fs.copyTpl(
            this.templatePath('_src/_app/_index.bootstrap.js'),
            this.destinationPath('src/app/index.bootstrap.js'),
            this
        );
        this.fs.copyTpl(
            this.templatePath('_src/_app/_index.module.js'),
            this.destinationPath('src/app/index.module.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_src/_app/_index.components.js'),
            this.destinationPath('src/app/index.components.js')
        );
        this.fs.copy(
            this.templatePath('_src/_app/_index.config.js'),
            this.destinationPath('src/app/index.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('_src/_app/_index.routes.js'),
            this.destinationPath('src/app/index.routes.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_src/_app/_index.run.js'),
            this.destinationPath('src/app/index.run.js')
        );
        this.fs.copyTpl(
            this.templatePath('_src/_app/_index.vendor.js'),
            this.destinationPath('src/app/index.vendor.js'),
            this
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

        this.fs.copyTpl(
            this.templatePath('_src/_app/_core/_services/**/*'),
            this.destinationPath('src/app/core/services'),
            this
        );

        this.fs.copyTpl(
            this.templatePath('_src/_app/_pages/main/**/*'),
            this.destinationPath('src/app/pages/main'),
            this
        );

        if (this.props.ocLazyLoad) {
            this.fs.copy(
                this.templatePath('_src/_app/_pages/async-page-example/**/*'),
                this.destinationPath('src/app/pages/async-page-example')
            );
        }
    };

};