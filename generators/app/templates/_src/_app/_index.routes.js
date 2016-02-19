'use strict';

function routeConfig($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

