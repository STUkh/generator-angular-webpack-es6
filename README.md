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

#### TODO:
> * ~~Add better examples with lazy-loaded modules~~ Added in 0.1.2
> * Rewrite generator files copy method

#### Inspired by [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) project.