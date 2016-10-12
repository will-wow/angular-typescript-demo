"use strict";
const angular = require('angular');
const todo_chat_1 = require('./todo-chat/todo-chat');
const entry_box_1 = require('./entry-box/entry-box');
const chat_box_1 = require('./chat-box/chat-box');
const module = angular.module('app.components', []);
module.component('todoChat', todo_chat_1.default);
module.component('chatBox', chat_box_1.default);
module.component('entryBox', entry_box_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module.name;
//# sourceMappingURL=index.js.map