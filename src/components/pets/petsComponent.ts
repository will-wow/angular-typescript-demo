import lodash = require('lodash');

import Pets from '../../services/Pets';

export class PetController {
  public list: string[];

  constructor(
    private $scope: ng.IScope,
    private pets: Pets
  ) {
    'ngInject';
    
    this.list = pets.list;
  }
}

const petComponent: ng.IComponentOptions = {
  template: require('./petsComponent.html'),
  controller: PetController
};

export default petComponent;