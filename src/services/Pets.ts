import _ = require('lodash');

/** Holds the pets list. */
class Pets {
  /** The internal pets list. */
  private petsList: string[];
  
  /** Generates the pets list. */
  constructor(
   $interval: ng.IIntervalService
  ) {
    'ngInject';
    
    // Set up the list.
    this.makeList();
    // Update it every second.
    $interval(this.makeList, 1000); 
  }
  
  /**
   * The random list of pets.
   */
  public get list(): string[] {
    return this.petsList;
  }
  
  /**
   * Update the pets list.
   */
  private makeList = (): void => {
    const cats = this.getRandomPets('cat');
    const dogs = this.getRandomPets('dog');

    this.petsList = _
      .chain(cats)
      .concat(dogs)
      .shuffle()
      .value();
  }

  /** 
   * Randomly generate some pets.
   * @param type - The type of pet to duplicate.
   * @returns A list of some of the type of pet.
   */
  private getRandomPets(type: string): string[] {
    return _
      .chain(5)
      .random(10)
      .times(() => type)
      .value();
  }
}

export default Pets;