import lodash = require('lodash');

import Pets from '../../services/Pets';

export class PetController {
  public pets: string[];

  constructor(
    private $scope: ng.IScope,
    private Pets: Pets
  ) {
    'ngInject';
    
    this.pets = Pets.list;
  }
}

const petComponent: ng.IComponentOptions = {
  template: require('./petsComponent.html'),
  controller: PetController
};

export default petComponent;