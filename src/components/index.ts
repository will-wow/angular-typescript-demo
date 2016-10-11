import angular = require('angular');

import todoChat from './todo-chat/todo-chat';
import entryBox from './entry-box/entry-box';
import chatBox from './chat-box/chat-box';

const module = angular.module('app.components', [
]);

module.component('todoChat', todoChat);
module.component('chatBox', chatBox);
module.component('entryBox', entryBox);

export default module.name;