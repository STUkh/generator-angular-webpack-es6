'use strict';

<% if (props.lodash) { %>
import * as _ from 'lodash/core';
<% } %>

<% if (props.moment) { %>
import * as moment from 'moment';
<% } %>

function MainController($log) {
  'ngInject';

  $log.debug('Hello from main controller!');

<% if (props.lodash) { %>
	this.lodash_version = _.VERSION;
<% } %>

<% if (props.moment) { %>
	this.moment_version = moment.version;
<% } %>

}

export default MainController;
