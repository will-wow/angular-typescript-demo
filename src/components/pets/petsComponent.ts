import _ = require('lodash');

import Pets from '../../services/Pets';

export class PetController {
  public list: string[];

  constructor(
    $scope: ng.IScope,
    pets: Pets
  ) {
    'ngInject';
    
    $scope.$watch(() => pets.list, (list) => {
      this.list = list;
    });
  }
}

const petComponent: ng.IComponentOptions = {
  template: require('./petsComponent.html'),
  controller: PetController
};

export default petComponent;