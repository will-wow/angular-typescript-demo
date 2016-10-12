"use strict";
const _ = require('lodash');
/** Represents a todo list. */
class Todo {
    /**
     * Create a list.
     * @param list - The items to initialize with.
     */
    constructor(list) {
        // ts-node doesn't like default params, so we can't use them in tests :-(
        this.list = list || [];
    }
    /**
     * Add an item to the todo list.
     * @param item - The item too add.
     * @returns true if successful, false if the item already exists.
     */
    addItem(item) {
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
    listItems() {
        // Clone the list, so we don't have to worry about mutation.
        return _.clone(this.list);
    }
    /**
     * Find an item by index
     * @param index - the item index
     * @returns the item if found, otherwise undefined.
     */
    getItemByIndex(index) {
        return this.list[index];
    }
    /**
     * Find items that match a filter string.
     * @param filter - the lookup string
     * @returns an array of possible matches, empty if none found.
     */
    getItemsByFilter(filter) {
        return _.reduce(this.list, (matches, item) => {
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
    removeItemByIndex(index) {
        const removedItems = this.list.splice(index, 1);
        return removedItems[0];
    }
    /**
     * Remove an item by text - exact matches only.
     * @param text - The full text of the item to remove.
     * @returns The removed item, or undefined if not found.
     */
    removeItemByText(text) {
        const removedItems = _.remove(this.list, text);
        return removedItems[0];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Todo;
//# sourceMappingURL=Todo.js.map