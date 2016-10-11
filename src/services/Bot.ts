import _ = require('lodash');
import NLC = require('natural-language-commander');

import Todo from './Todo';

class Bot {
  private nlc: NLC;
  private todo: Todo;
  /** The message to send when nothing matches. */
  private failMessage = 'What?';

  constructor(
    private send: (message: string) => void
  ) {
    this.nlc = new NLC();
    this.todo = new Todo();

    this.nlc.registerIntent({
      intent: 'PING_PONG',
      utterances: [
        'ping'
      ],
      callback: () => this.send('Pong.')
    });

    this.nlc.registerIntent({
      intent: 'ADD',
      slots: [
        {
          name: 'Item',
          type: 'STRING'
        }
      ],
      utterances: [
        'add {Item} to my list',
        'put {Item} to my list',
        'add {Item} to the list',
        'put {Item} to the list',
        'add {Item} to my todo list',
        'put {Item} on my todo list',
        'add {Item} to the todo list',
        'put {Item} on the todo list',
        'remind me to {Item}',
        'have me {Item}',
        'get me to {Item}',
        'make me {Item}',
        'add {Item}'
      ],
      callback: this.addItem
    });

    // Asks the user what they want to add to their list.
    this.nlc.registerQuestion({
      name: 'ADD_QUESTION',
      slotType: 'STRING',
      questionCallback: () => this.send(`What do you want to add to your list?`),
      successCallback: (item: string) => this.addItem(item),
      cancelCallback: () => this.send(`Okay, never mind.`),
      failCallback: () => this.send(`Sorry, I'm not sure what you mean.`)
    });

    // Intent for adding an item, but not including what they want to do.
    this.nlc.registerIntent({
      intent: 'ADD_DIALOG',
      utterances: [
        'add to my list',
        'put on my list',
        'add to the list',
        'put on the list',
        'add to my todo list',
        'put on my todo list',
        'add to the todo list',
        'put on the todo list',
        'remind me',
        'make me',
        'add'
      ],
      callback: () => this.nlc.ask('ADD_QUESTION')
    });

    this.nlc.registerIntent({
      intent: 'LIST',
      slots: [
        {
          name: 'Item',
          type: 'STRING'
        }
      ],
      utterances: [
        `what's on my todo list`,
        `what is on my todo list`,
        `what's on my list`,
        `what is on my list`,
        `what's on the todo list`,
        `what is on the todo list`,
        `what's on the list`,
        `what is on the list`,
        `what do I have to do`,
        `do I have to do anything`,
        `do I have anything to do`
      ],
      callback: () => {
        const list = this.todo.listItems();

        // Handle empty list.
        if (!list.length) {
          this.send(`Looks like you've got nothing to do!`);
          return;
        }

        // Describe list.
        this.send(`Here's what's on your todo list:`);

        // List each item.
        _.forEach(list, (item: string, index: number): void => {
          this.send(`${index + 1}: ${item}`);
        });
      }
    });

    this.nlc.registerIntent({
      intent: 'COMPLETE',
      slots: [
        {
          name: 'Index',
          type: 'NUMBER'
        }
      ],
      utterances: [
        'mark {Index} as complete',
        'mark {Index} as completed',
        'mark {Index} as finished',
        'mark {Index} as done',
        'I finished {Index}',
        'I completed {Index}',
        'complete {Index}',
        'finish {Index}'
      ],
      callback: (index: number) => {
        // Items start at 0, so subtract 1 from the user input.
        const removedItem: string = this.todo.removeItemByIndex(index - 1);

        if (removedItem) {
          this.send(`Okay, marking "${removedItem}" as complete`);
        } else {
          this.send(`Sorry, you don't have an item ${index}!`);
        }
      }
    });

    this.nlc.registerIntent({
      intent: 'HELP',
      utterances: [
        'help',
        'what',
        'how'
      ],
      callback: () => {
        this.send(`You can ask things like:`);
        this.send(`"add {Item} to my list" or "remind me to {Item}"`);
        this.send(`"what's on my todo list" or "do I have anything to do"`);
        this.send(`"mark {Number} as done" or "I finished {Number}"`);
      } 
    });

    this.nlc.registerNotFound(() => this.send(this.failMessage));
  }

  public handleCommand = (command) => {
    return this.nlc.handleCommand(command);
  };

  private addItem = (item: string) => {
    const success = this.todo.addItem(item);

    if (success) {
      this.send(`Okay, added "${item}" to your todo list!`);
    } else {
      this.send(`Sorry, "${item}" is already on your todo list!`);
    }
  };
}

export default Bot;