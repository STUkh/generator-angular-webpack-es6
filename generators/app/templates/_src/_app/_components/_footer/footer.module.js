'use strict';

import footerDirective from './footer.directive';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule
  .directive('footerTest', footerDirective);

export default footerModule;
