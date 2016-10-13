import _ = require('lodash');

import Pets from '../../services/Pets';

/**
 * Displays the list of pets.
 */
export class PetsController {
  /** The pets list. */
  public list: string[];
  /** The application title. */
  public title: string;

  constructor(
    $scope: ng.IScope,
    pets: Pets
  ) {
    'ngInject';
    
    $scope.$watch(() => pets.list, (list) => {
      this.list = list;
    });

    this.title = `Pets Lister`;
  }
  
  /**
   * Generates the subtitle.
   */
  subtitle(): string {
    return `"Listing ${this.list.length} pets since 2016"`;
  }
}

// Old way
function OldPetsController(
  $scope,
  pets
) {
  var self = this;

  $scope.$watch(function() {
    return pets.list;
  }, function (list) {
    self.list = list;
  });
  
  self.title = 'Pets Lister';
  self.subtitle = function () {
    return '"Listing ' + self.list.length + 'pets since 2016"';
  };
}

const petComponent: ng.IComponentOptions = {
  template: require('./petsComponent.html'),
  controller: PetsController
};

export default petComponent;