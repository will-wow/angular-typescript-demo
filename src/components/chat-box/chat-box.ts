import lodash = require('lodash');
import angular = require('angular');

import {IMessage} from '../todo-chat/todo-chat';

export class ChatBoxController {
  // Bindings
  public messages: IMessage[];

  constructor(
    $element: JQuery,
    private $scope: ng.IScope
  ) {
    'ngInject';

    // Stash the raw DOM element.
    const element: Element = $element[0];

    // Scroll to bottom when a new message gets added.
    this.$scope.$watch(
      () => this.messages.length,
      () => element.scrollTop = element.scrollHeight
    );
  }

}

const chatBox: ng.IComponentOptions = {
  bindings: {
    messages: '<'
  },
  template: require('./chat-box.html'),
  controller: ChatBoxController
};

export default chatBox;