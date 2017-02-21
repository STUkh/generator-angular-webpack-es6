'use strict';

<% if (props.ocLazyLoad) { %>
import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';
<% } %>

function routeConfig($urlRouterProvider<% if (props.ocLazyLoad) { %>, $stateProvider, resolverProvider<% } %>) {
  'ngInject';

<% if (props.ocLazyLoad) { %>
    $stateProvider
        .state('async', {
          url: '/async',
          templateUrl: asyncTemplate,
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

