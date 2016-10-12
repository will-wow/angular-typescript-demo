import angular = require('angular');
import components from './components';

const app = angular.module('app', [
  components
]);
console.log('foo');

angular.element(document).ready((): void => {
  angular.bootstrap(document, [app.name]);
});