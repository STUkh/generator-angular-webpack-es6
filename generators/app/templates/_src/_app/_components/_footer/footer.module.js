'use strict';

import FooterComponent from './footer.component';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule
    .component('footerTest', new FooterComponent());

export default footerModule;
