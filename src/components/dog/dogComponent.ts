import lodash = require('lodash');

import IPetController from '../pet/IPetController';

export class DogController implements IPetController {
  public type: string;

  constructor(
    private $scope: ng.IScope
  ) {
    'ngInject';
    
    this.type = 'dog';
  }
  
  public speak(): string {
    return 'Woof';
  }
}

const dogComponent: ng.IComponentOptions = {
  template: require('../pet/petComponent.html'),
  controller: DogController
};

export default dogComponent;