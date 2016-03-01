'use strict';

var _ = require('lodash');
var utils = require("./utils");

module.exports = function (AngularWebpackES6Generator) {

  var imports = [];

  AngularWebpackES6Generator.prototype.defaultImports = function defaultImports() {
    imports.push(this.props.resource);

    if (this.props.ocLazyLoad) {
      imports.push({
        module: "oc.lazyLoad",
        package: "oclazyload"
      });
    }
  };

  /**
   * Compute Angular's module to load and format the dependency list to insert
   */
  AngularWebpackES6Generator.prototype.computeModules = function computeModules() {
    var ngModules = this.props.angularModules.map(function (module) {
      return module.module;
    });

    imports.forEach(function (mod) {
      if (mod.module) {
        ngModules.push(mod.module);
      }
    });

    this.modulesDependencies = ngModules
      .filter(_.isString)
      .map(function (dependency) {
        return '\"' + dependency + '\"';
      })
      .join(', \r\n\t');
  };

  /**
   * Simplify the model to simplify access to angular modules from the templates
   */
  AngularWebpackES6Generator.prototype.prepareAngularModules = function prepareAngularModules() {
    this.angularModulesObject = {};

    this.props.angularModules.forEach(function (module) {
      this[module.key] = module.module;
    }, this.angularModulesObject);
  };

  /**
   * Prepare list for vendor imports
   */
  AngularWebpackES6Generator.prototype.prepareImportsList = function prepareImportsList() {

    this.importList = [];

    imports.forEach(function (mod) {
      if (mod.module && mod.package) {
        this.importList.push(mod.package);
      }
    }, this);

    _.forEach(this.props, function(section) {

      if (_.isArray(section)) {
        section.forEach(function(prop) {
          if (utils.isHasPackage(prop)) {
            this.importList.push(utils.stripPackageName(prop.package));
          }
        }, this);
      } else if (utils.isHasPackage(section)) {
        this.importList.push(utils.stripPackageName(section.package));
      }

    }.bind(this));

  };

};
