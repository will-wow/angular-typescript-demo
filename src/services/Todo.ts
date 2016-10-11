import _ = require('lodash');

/** Represents a todo list. */
class Todo {
  /** The internal list of items. */
  private list: string[];

  /** 
   * Create a list.
   * @param list - The items to initialize with.
   */
  constructor(list?: string[]) {
    // ts-node doesn't like default params, so we can't use them in tests :-(
    this.list = list || [];
  }

  /**
   * Add an item to the todo list.
   * @param item - The item too add.
   * @returns true if successful, false if the item already exists.
   */
  addItem(item: string): boolean {
    // Don't allow empty items.
    if (!item) {
      return false;
    }

    // Don't allow duplicates.
    if (_.includes(this.list, item)) {
      return false;
    }

    this.list.push(item);
    return true;
  }

  /**
   * Get a copy of the full list of todo items.
   * @returns the array of items.
   */
  listItems(): string[] {
    // Clone the list, so we don't have to worry about mutation.
    return _.clone(this.list);
  }

  /** 
   * Find an item by index
   * @param index - the item index
   * @returns the item if found, otherwise undefined.
   */
  getItemByIndex(index: number): string {
    return this.list[index];
  }

  /**
   * Find items that match a filter string.
   * @param filter - the lookup string
   * @returns an array of possible matches, empty if none found.
   */
  getItemsByFilter(filter: string): string[] {
    return _.reduce(this.list, (matches: string[], item: string) => {
      // Include the item if the search filter exists within it.
      if (item.includes(filter)) {
        matches.push(item);
      }

      return matches; 
    }, []);
  }

  /**
   * Remove an item by index.
   * @param index - The item index to remove.
   * @returns The removed item, or undefined if not found.
   */
  removeItemByIndex(index: number): string {
    const removedItems: string[] = this.list.splice(index, 1);
    return removedItems[0];
  }

  /**
   * Remove an item by text - exact matches only.
   * @param text - The full text of the item to remove.
   * @returns The removed item, or undefined if not found.
   */
  removeItemByText(text: string): string {
    const removedItems: string[] = _.remove(this.list, text);
    return removedItems[0];
  }
}

export default Todo;