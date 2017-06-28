'use strict';

// node_modules
import "angular";

import "@uirouter/angularjs";

<% for(var i=0; i<importList.length; i++) { %>
import "<%= importList[i] %>";
<% } %>


// local scripts
//import "../assets/js/...";
