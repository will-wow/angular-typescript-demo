import lodash = require('lodash');

import Bot from '../../services/bot';

export interface IMessage {
  text: string;
  fromUser?: boolean;
  fromBot?: boolean;
}

export class TodoChatController {
  public messages: IMessage[] = [];
  private bot: Bot;

  constructor(
    private $scope: ng.IScope,
    private $sce
  ) {
    'ngInject';

    this.bot = new Bot(this.onRecieve);
  }

  $onInit() {
    // Add welcome messages.
    this.messages.push({
      text: `
        Hi! I'm todo bot, and a demo of natural-language-commander,
        a library for building natural language interfaces to bots. I can store todo list items, display them, and mark
        them as complete. Just type a command in the box - hopefully I'll do what you expect me to!
      `,
      fromBot: true
    });

    this.messages.push({
      text: `So, what do you want to do?`,
      fromBot: true
    });
  }

  /**
   * Handle receiving a message from the bot.
   * @param message - The bot's reply.
   */
  private onRecieve = (message: string): void => {
    this.messages.push({
      text: message,
      fromBot: true
    });
    this.$scope.$apply();
  };

  /**
   * Handle the user sending a message by printing it and passing it to the bot.
   * @param command - The user's command.
   */
  public onSend(command: string): void {
    this.messages.push({
      text: command,
      fromUser: true
    });

    this.bot.handleCommand(command);
  }
}

const todoChat: ng.IComponentOptions = {
  template: require('./todo-chat.html'),
  controller: TodoChatController
};

export default todoChat;