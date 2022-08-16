"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.render = render;

var _vue = require("vue");

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "feather feather-users",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
}, null, -1
/* HOISTED */
);

const _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}

var _default = {
  render
};
exports.default = _default;