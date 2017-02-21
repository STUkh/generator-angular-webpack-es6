'use strict';

<% if (props.lodash) { %>
import  _ from 'lodash/core';
<% } %>

<% if (props.moment) { %>
import moment from 'moment';
<% } %>

import angularLogo from '_images/angular.png';

function MainController($log) {
  'ngInject';

  $log.debug('Hello from main controller!');

<% if (props.lodash) { %>
	this.lodash_version = _.VERSION;
<% } %>

<% if (props.moment) { %>
	this.moment_version = moment.version;
<% } %>

    this.angularLogo = angularLogo;

}

export default MainController;
