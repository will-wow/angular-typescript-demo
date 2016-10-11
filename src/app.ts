import angular = require('angular');
import NLC = require('natural-language-commander');
import components from './components';

const app = angular.module('app', [
  components
]);

angular.element(document).ready((): void => {
  angular.bootstrap(document, [app.name]);
});