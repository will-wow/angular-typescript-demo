import angular = require('angular');

import Pets from './Pets';

const module = angular.module('app.services', [
]);

module.service('pets', Pets);

export default module.name;