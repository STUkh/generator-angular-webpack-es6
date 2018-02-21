'use strict';

<% if (props.lodash) { %>
import  _ from 'lodash/core';
<% } %>
<% if (props.moment) { %>
import moment from 'moment';
<% } %>

export default class MainController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.awesomeThings = ['Angular', 'Webpack', 'babel'];
    }

    $onInit() {
        <% if (props.lodash) { %>
        this.lodash_version = _.VERSION;
        <% } %>
        <% if (props.moment) { %>
        this.moment_version = moment.version;
        <% } %>
    }
}
