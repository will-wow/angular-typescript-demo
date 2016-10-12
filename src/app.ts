import angular = require('angular');
import components from './components';
import services from './services';

const app = angular.module('app', [
  components,
  services
]);
console.log('foo');

angular.element(document).ready((): void => {
  angular.bootstrap(document, [app.name]);
});