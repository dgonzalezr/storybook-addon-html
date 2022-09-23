"use strict";

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _addons = require("@storybook/addons");

var _Panel = _interopRequireDefault(require("./Panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ADDON_ID = 'html';
const PANEL_ID = `${ADDON_ID}/panel`;

_addons.addons.register(ADDON_ID, () => {
  _addons.addons.add(PANEL_ID, {
    title: 'HTML',
    type: _addons.types.PANEL,
    render: _ref => {
      let {
        active,
        key
      } = _ref;
      return /*#__PURE__*/_react.default.createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react.default.createElement(_Panel.default, null));
    }
  });
});