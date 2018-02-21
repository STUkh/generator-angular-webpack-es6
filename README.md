# generator-angular-webpack-es6

[![NPM Version](http://img.shields.io/npm/v/generator-angular-webpack-es6.svg?style=flat-square)](https://www.npmjs.com/package/generator-angular-webpack-es6)
[![Download Month](http://img.shields.io/npm/dm/generator-angular-webpack-es6.svg?style=flat-square)](https://www.npmjs.com/package/generator-angular-webpack-es6)

<div style="text-align:center" align="center">
    <img src="generators/app/angular.png" alt="generator-angular-webpack-es6">
</div>

> Yeoman generator for AngularJS + Webpack with ES6 and SASS.

> * Latest Webpack with Tree Shaking feature enabled
> * Babel 6 with ES2017 features included
> * Perfectly compatible with angularOcLazyLoad plugin
> * SASS as CSS preprocessor
> * Angular UI router as default router already included
> * Optional installation bootstrap-sass source
> * Optional angular modules installation
> * All necessary webpack loaders already included (Sass, Images, Fonts, ngAnnotate, ngTemplateCache, etc.)
> * Config has options for development and production mode

> Use only webpack with npm. No external dependencies like bower, grunt, gulp...

> Webpack@2 still in Beta and it may contain some bugs. Please, report them to Webpack developers directly.

### Install

##### Install required tools `yo`, and `webpack`:
```
npm install -g yo webpack
```

##### Install `generator-angular-webpack-es6`:
```
npm install -g generator-angular-webpack-es6
```

### Directory Layout

```shell

├── /e2e/                                 # End to End  test folder
│   └── main.component.spec.js            # End to end test example
├── /config/                              # Build config
│   └── /webpack/                         # Webpack config files
│       ├── /environments/                # Webpack env dependent configs
│       └── global.js                     # Global webpack settings for all envs
├── /dist/                                # The folder for compiled output
├── /node_modules/                        # 3rd-party libraries and utilities
├── /src/                                 # Source folder
│   ├── /app/                             # Application code
│   │   ├── /components/                  # Shared UI components
│   │   │   └── /footer/                  # Footer shared component. Place footer's styles, directives, templates here
│   │   ├── /core/                        # Shared angular services/directives
│   │   │   ├── /directives/              # Shared directives
│   │   │   ├── /services/                # Shared services
│   │   │   └── /core.module.js           # Import of all core components should be here
│   │   ├── /pages/                       # All pages-dependent content should place here
│   │   │   ├── /main/                    # Main page
│   │   │   │   ├── /main.controller.js   # Main page Controller
│   │   │   │   ├── /main.controller.spec.js  # Test file for main page controller
│   │   │   │   ├── /main.html            # Main page template
│   │   │   │   ├── /main.module.js       # Main page module
│   │   │   │   └── /main.route.js        # Main page routes
│   │   │   └── /.../                     # Other pages...
│   │   ├── /index.bootstrap.js           # Entry point. Import internal and external modules and bootstrap (RUN) angular application
│   │   ├── /index.components.js          # Define all your custom components here
│   │   ├── /index.config.js              # Function that will be triggered in Angular's "config" phase
│   │   ├── /index.module.js              # Main application's module
│   │   ├── /index.routes.js              # Describe only "otherwise" and async routes here
│   │   ├── /index.run.js                 # Function that will be triggered in Angular's "run" phase
│   │   ├── /index.vendor.js              # Import all vendors and 3rd party plugins here
│   ├── /assets/                          # Static content
│   │   ├── /images/                      # Images
│   │   ├── /js/                          # Extra libs folder
│   │   └── /styles/                      # Styles folder
│   │       ├── /css/                     # CSS
│   │       └── /sass/                    # SASS
│   ├── favicon.ico                       # Application icon to be displayed in bookmarks
│   └── tpl-index.html                    # Template for html-webpack-plugin that will be transpiled into index.html in /dist
│── .babelrc                              # Babel config with presets and plugins
│── .gitignore                            # List of files to ignore by git
│── karma.conf.js                         # Karma config
│── protractor.conf.js                    # protractor config
│── spec.bundle.js                        # The bundle file for including in karma config
│── package.json                          # The list of project dependencies and NPM scripts
└── webpack.config.js                     # Bundling and optimization settings for Webpack
```

### Run

##### Create a new directory, and go into:
```
mkdir my-new-project && cd $_
```

##### Run `yo angular-webpack-es6`, and select desired technologies.
##### `npm start` or `npm run dev` - to start development server on http://localhost:8080.
##### `npm run build` - To make production-ready build run  after few moments you will see build id `dist` folder.

### Test
##### Unit testing
The app uses [Karma](http://karma-runner.github.io/2.0/index.html) to run the unit tests, which you can find near the test target (*.spec.js files). see example test in the above directory structure.
For running these tests run this command in project directory:
```
npm test
```
This command will automatically watch for changes that happening in test files
and rerun the test suite
To disable the above behaviour , please check package.json file

##### End-to-end testing
The app uses [Protractor](https://github.com/angular/protractor), an end-to-end test framework designed for AngularJS apps, to the end-to-end tests, which you can find in the e2e folder.

##### Setup development environment for running end-to-end tests
* First make sure that you did `npm install`.
* Download the necessary binaries for Selenium Server `npm run webdriver-update`.
* Open onother command line and run the development server `npm start` and make sure the running port match the baseUrl port in protractor.conf.js file.
* Finally run `npm run test:e2e`.

##### Example tests
* Check the example test for unit tests using jasmin api in
     ```
     /src/app/pages/main/main.controller.spec.js
     ```
    All your unit test files must end with `.spec.js`

* Check the example test for e2e test in e2e directory.
     ```
     /e2e/main.component.spec.js
     ```


### Known bugs:
> * **Problem**: Webpack2 unable to import function with only export default value.

>   **Workaround**: Use ```import * as variable from "package" ``` instead of ```import variable from "package" ```

> * **Problem**: Webpack3: ExtractTextPlugin and file-loader do not work with the use syntax. [Link to the issue](https://github.com/webpack/extract-text-webpack-plugin/issues/275).

### Contribute

##### If you want to contribute:
> * Fork repository and clone project to your machine
> * Install npm packages and create new feature/fix branch
> * Link local project to be able install generator with `yo` from folder like from global installed package:
> ``` npm link ```
> * Make PR
> * ...
> * PROFIT

#### TODO:
> * Add .dockerfile
> * ~~Add example testing environment with karma and protractor~~
> * Add more dotfiles
> * ~~Add better examples with lazy-loaded modules~~ Added in 0.1.2
> * ~~Update to Babel6~~ Added in 0.2.0

#### Inspired by [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) project.
