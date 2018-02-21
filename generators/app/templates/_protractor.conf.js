exports.config = {
    framework: 'jasmine',
    baseUrl: 'http://localhost:8081',
    suites: {
      all: [
        './e2e/**/*.js'
      ]
    },
    suite: 'all',
    capabilities: {
      browserName: 'chrome'
    },
    onPrepare: function onPrepare() {
      require('babel-core/register');

      var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: 'none',
        prefixes: {
          success: '+ ',
          failure: 'x ',
          pending: '* '
        }
      }));

      browser.manage().window().setSize(1280, 1024);
    }
  };
