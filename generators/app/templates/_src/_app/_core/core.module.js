'use strict';

const shared = angular.module('core.shared', []);

require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/store.factory')(shared);
require('./services/resolver.provider')(shared);

export default shared;
