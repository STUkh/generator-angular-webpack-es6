'use strict';

// node_modules
import "angular";

import "angular-ui-router";

<% if (props.jQuery.package) { %>
import 'jquery';
<% } %>

<% for(var i=0; i<importList.length; i++) { %>
import "<%= importList[i] %>";
<% } %>


// local scripts
//import "../assets/js/...";
