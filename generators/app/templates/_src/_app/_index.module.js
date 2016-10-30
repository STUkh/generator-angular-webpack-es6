'use strict';

import * as components from './index.components';
import * as config from './index.config';
import * as run from './index.run';


const App = angular.module(
  "<%= props.appName %>", [
    // plugins
    require('angular-ui-router'),
    <%- modulesDependencies %>,

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,

    // routes
    require("./index.routes").name,

    // pages
    require("./pages/main/main.module").name

  ]
);

App
  .config(config)
  .run(run);



export default App;
