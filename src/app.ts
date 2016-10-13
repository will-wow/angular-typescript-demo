import angular = require('angular');
import components from './components';
import services from './services';

const app = angular.module('app', [
  components,
  services
]);

const mathFactory = {
  addOne: (n) => {
    return n + 1;
  }
};

// register the factory here.

angular.element(document).ready((): void => {
  angular.bootstrap(document, [app.name]);
});