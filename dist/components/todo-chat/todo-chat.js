"use strict";
const bot_1 = require('../../services/bot');
class TodoChatController {
    constructor($scope, $sce) {
        'ngInject';
        this.$scope = $scope;
        this.$sce = $sce;
        this.messages = [];
        /**
         * Handle receiving a message from the bot.
         * @param message - The bot's reply.
         */
        this.onRecieve = (message) => {
            this.messages.push({
                text: message,
                fromBot: true
            });
            this.$scope.$apply();
        };
        this.bot = new bot_1.default(this.onRecieve);
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
     * Handle the user sending a message by printing it and passing it to the bot.
     * @param command - The user's command.
     */
    onSend(command) {
        this.messages.push({
            text: command,
            fromUser: true
        });
        this.bot.handleCommand(command);
    }
}
exports.TodoChatController = TodoChatController;
const todoChat = {
    template: require('./todo-chat.html'),
    controller: TodoChatController
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = todoChat;
//# sourceMappingURL=todo-chat.js.map