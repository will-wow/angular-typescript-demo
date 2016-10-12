import angular = require('angular');

import catComponent from './catComponent';

const module = angular.module('app.components', [
]);

module.component('catComponent', catComponent);

export default module.name;