"use strict";
class EntryBoxController {
    constructor($element) {
        this.$element = $element;
    }
    $onInit() {
        this.$element.find('textarea').focus();
    }
    sendCommand(event) {
        if (event.keyCode === 13) {
            // Pass command up.
            this.onSend({ command: this.command });
            // Clear box.
            this.command = '';
            // Stop from adding linebreak.
            event.preventDefault();
        }
    }
}
exports.EntryBoxController = EntryBoxController;
const entryBox = {
    bindings: {
        onSend: '&'
    },
    template: require('./entry-box.html'),
    controller: EntryBoxController
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = entryBox;
//# sourceMappingURL=entry-box.js.map