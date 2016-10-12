import angular = require('angular');

import catComponent from './cat/catComponent';
import petsComponent from './pets/petsComponent';

const module = angular.module('app.components', [
]);

module.component('cat', catComponent);
module.component('pets', petsComponent);

export default module.name;