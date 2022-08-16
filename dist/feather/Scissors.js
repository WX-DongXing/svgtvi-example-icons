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
  class: "feather feather-scissors",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("circle", {
  cx: "6",
  cy: "18",
  r: "3"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"
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