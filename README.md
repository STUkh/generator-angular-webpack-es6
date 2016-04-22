# generator-angular-webpack-es6

> Yeoman generator for AngularJS + Webpack with ES6 and SASS.

> * Perfectly compatible with angularOcLazyLoad plugin
> * SASS as CSS preprocessor
> * Angular UI router as default router already included
> * Optional installation bootstrap-sass source
> * Optional angular modules installation
> * All necessary webpack loaders already included (Sass, Images, Fonts, ngAnnotate, ngTemplateCache, etc.)
> * Config has options for development and production mode

> Use only webpack with npm. No external dependencies like bower, grunt, gulp...

### Install

##### Install required tools `yo`, and `webpack`:
```
npm install -g yo webpack
```

##### Install `generator-angular-webpack-es6`:
```
npm install -g generator-angular-webpack-es6
```

### Run

##### Create a new directory, and go into:
```
mkdir my-new-project && cd $_
```

##### Run `yo angular-webpack-es6`, and select desired technologies:
```
yo angular-webpack-es6
```

##### Run `npm run dev` to start development server on http://localhost:8080:
```
npm run dev
```

##### To make production-ready build run `npm run build` after few moments you will see build id `dist` folder:
```
npm run build
```

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
> * ~~Add better examples with lazy-loaded modules~~ Added in 0.1.2
> * ~~Update to Babel6~~ Added in 0.2.0

#### Inspired by [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) project.