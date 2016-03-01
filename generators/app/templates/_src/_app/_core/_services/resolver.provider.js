'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.asyncPagePrealoading = asyncPagePrealoading;
        this.$get = function() { return this; };
    }

    <% if (props.ocLazyLoad) { %>
        function asyncPagePrealoading ($q, $ocLazyLoad) {
            "ngInject";

            var deferred = $q.defer();
            require.ensure([], function (require) {
                var asyncModule = require('../../pages/async-page-example/async.module');
                $ocLazyLoad.load({
                    name: asyncModule.name,
                });
                deferred.resolve(asyncModule.controller);
            });
            return deferred.promise;
        }
    <% } else { %>
        function asyncPagePrealoading ($q) {
            "ngInject";

            var defer = $q.defer();
            // Some async stuff (request, calculations, etc.)
            return defer.promise;
        }
    <% } %>

}
