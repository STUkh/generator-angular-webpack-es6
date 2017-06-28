'use strict';

import components from './index.components';
import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';


const App = angular.module(
  "<%= props.appName %>", [
    // plugins
    uiRouter,
    <%- modulesDependencies %>,

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name

  ]
);

App
  .config(config)
  .run(run);



export default App;
