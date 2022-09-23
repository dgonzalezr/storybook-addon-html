"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.managerEntries = managerEntries;

function managerEntries() {
  let entry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return [...entry, require.resolve('../register')];
}

function config() {
  let entry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let {
    addDecorator = true
  } = arguments.length > 1 ? arguments[1] : undefined;
  const addonConfig = [];

  if (addDecorator) {
    addonConfig.push(require.resolve('./addDecorators'));
  }

  return [...entry, ...addonConfig];
}