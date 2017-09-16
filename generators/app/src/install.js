'use strict';

var _ = require("lodash");

module.exports = function (AngularWebpackES6Generator) {

    // Install optional dependencies
    AngularWebpackES6Generator.prototype.installDependencies = function installDependencies() {

        var deps = [
            "angular",
            "@uirouter/angularjs"
        ];

        if (this.props.bootstrapSass) {
            deps.push("bootstrap-sass");
        }

        if (this.props.lodash) {
            deps.push("lodash");
        }

        if (this.props.moment) {
            deps.push("moment");
        }

        if (this.props.eslint) {
            deps.push('eslint', 'eslint-loader');
        }

        deps = _.concat(deps, this.installList);

        this.npmInstall(deps, { 'save': true });
    };

    // Install dependencies from package.json
    AngularWebpackES6Generator.prototype.install = function install() {
        this.npmInstall();
    };

};