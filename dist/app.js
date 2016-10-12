"use strict";
const angular = require('angular');
const components_1 = require('./components');
const app = angular.module('app', [
    components_1.default
]);
angular.element(document).ready(() => {
    angular.bootstrap(document, [app.name]);
});
//# sourceMappingURL=app.js.map