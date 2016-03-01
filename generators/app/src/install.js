'use strict';

var _ = require("lodash");

module.exports = function (AngularWebpackES6Generator) {

    // Install optional dependencies
    AngularWebpackES6Generator.prototype.installDependencies = function installDependencies() {

        var deps = [
            "angular",
            "angular-ui-router"
        ];

        if (this.props.bootstrapSass) {
            deps.push("bootstrap-sass");
        }

        deps = _.concat(deps, this.importList);

        this.npmInstall(deps, { 'save': true });
    };

    // Install dependencies from package.json
    AngularWebpackES6Generator.prototype.install = function install() {
        this.npmInstall();
    };

};