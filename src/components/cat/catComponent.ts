import lodash = require('lodash');

export class CatController {
  public name: string;

  constructor(
    private $scope: ng.IScope
  ) {
    'ngInject';
  }
  
  public speak(): string {
    return 'Meow';
  }
}

const catComponent: ng.IComponentOptions = {
  template: ``,
  controller: CatController
};

export default catComponent;