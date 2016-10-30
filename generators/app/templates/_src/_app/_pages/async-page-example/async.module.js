'use strict';

import './async.scss';

import * as asyncController from './async.controller.js';

const asyncModule = angular.module('async-module', []);

asyncModule.controller('asyncController', asyncController);

export default asyncModule;