'use strict';

import route from './main.route';

const mainPageModule = angular.module('main-module', [
  'ui.router'
]);

mainPageModule
    .config(route);

export default mainPageModule;
