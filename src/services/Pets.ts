import _ = require('lodash');

/** Holds the pets list. */
class Pets {
  /** The internal pets list. */
  private petsList: string[];
  
  /** Generates the pets list. */
  constructor() {
    const cats = this.getRandomPets('cat');
    const dogs = this.getRandomPets('cat');

    this.petsList = _
      .chain(cats)
      .concat(dogs)
      .shuffle()
      .value();
  }
  
  /**
   * The random list of pets.
   */
  public get list(): string[] {
    return this.petsList;
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