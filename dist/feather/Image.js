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
  class: "feather feather-image",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("circle", {
  cx: "8.5",
  cy: "8.5",
  r: "1.5"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "m21 15-5-5L5 21"
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