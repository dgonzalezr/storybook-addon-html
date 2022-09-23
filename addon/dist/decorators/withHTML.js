"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withHTML = void 0;

var _addons = require("@storybook/addons");

var _shared = require("../shared");

const isValidRegExp = expression => {
  try {
    new RegExp(expression);
  } catch (e) {
    throw new Error(e.message);
  }

  return true;
};

const withHTML = (0, _addons.makeDecorator)({
  name: 'withHTML',
  parameterName: 'html',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context, _ref) => {
    let {
      parameters = {}
    } = _ref;
    setTimeout(() => {
      const channel = _addons.addons.getChannel();

      const rootSelector = parameters.root || '#root';
      const root = document.querySelector(rootSelector);
      let html = root ? root.innerHTML : `${rootSelector} not found.`;

      if (parameters.removeEmptyComments) {
        html = html.replace(/<!--\s*-->/g, '');
      }

      if (parameters.removeComments) {
        const {
          removeComments
        } = parameters;

        if (typeof removeComments === 'boolean') {
          // Will remove all HTML comments
          html = html.replace(/<!--(.*?)-->/g, '');
        } else if (isValidRegExp(removeComments)) {
          // Will remove only HTML comments matching the expression provided
          html = html.replace(removeComments, '');
        }
      }

      channel.emit(_shared.EVENT_CODE_RECEIVED, {
        html,
        options: parameters
      });
    }, 0);
    return storyFn(context);
  }
});
exports.withHTML = withHTML;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}