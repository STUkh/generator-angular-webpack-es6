'use strict';

var _ = require('lodash');
var chalk = require('chalk');

var prompts = require('../prompts.json');

function logChoice(prompt, prop) {
    var choice = _.find(prompt.choices, {value: prop});
    this.log('\t*', choice.name);
}

module.exports = function (AngularWebpackES6Generator) {

    /**
     * Check if the default option is set, if it is, use defaults props and log them
     */
    AngularWebpackES6Generator.prototype.defaultOption = function defaultOption() {
        if (this.options.default) {

            this.log('__________________________');
            this.log('You use ' + chalk.green('--default') + ' option:');

            _.forEach(this.props, function (propOrProps, key) {
                var prompt = _.find(prompts, {name: key});
                if (_.isArray(propOrProps)) {
                    propOrProps.forEach(function (prop) {
                        logChoice.call(this, prompt, prop);
                    }, this);
                } else {
                    logChoice.call(this, prompt, propOrProps);
                }
            }, this);

            this.log('__________________________\n');
        }
    };

    /**
     * Ask all questions from prompts.json
     * Add conditional tests on those depending on first responses
     * Complete responses with null answers for questions not asked
     */
    AngularWebpackES6Generator.prototype.askQuestions = function askQuestions() {
        if (this.skipConfig || this.options.default) {
            return;
        }

        var done = this.async();

        this.prompt(prompts, function (props) {

            this.props = _.merge(this.props, props);

            done();
        }.bind(this));
    };

};