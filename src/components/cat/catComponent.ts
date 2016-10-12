import lodash = require('lodash');

import IPetController from '../pet/IPetController';

export class CatController implements IPetController {
  public type: string;

  constructor(
    private $scope: ng.IScope
  ) {
    'ngInject';
    
    this.type = 'cat';
  }
  
  public speak(): string {
    return 'Meow';
  }
}

const catComponent: ng.IComponentOptions = {
  template: require('../pet/petComponent.html'),
  controller: CatController
};

export default catComponent;