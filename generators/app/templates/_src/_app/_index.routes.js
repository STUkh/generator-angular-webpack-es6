'use strict';

function routeConfig($urlRouterProvider<% if (props.ocLazyLoad) { %>, $stateProvider, resolverProvider<% } %>) {
  'ngInject';

<% if (props.ocLazyLoad) { %>
    $stateProvider
        .state('async', {
          url: '/async',
          templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html'),
          controller: 'asyncController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        });
<% } %>

  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

