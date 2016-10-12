"use strict";
class ChatBoxController {
    constructor($element, $scope) {
        'ngInject';
        this.$scope = $scope;
        // Stash the raw DOM element.
        const element = $element[0];
        // Scroll to bottom when a new message gets added.
        this.$scope.$watch(() => this.messages.length, () => element.scrollTop = element.scrollHeight);
    }
}
exports.ChatBoxController = ChatBoxController;
const chatBox = {
    bindings: {
        messages: '<'
    },
    template: require('./chat-box.html'),
    controller: ChatBoxController
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = chatBox;
//# sourceMappingURL=chat-box.js.map