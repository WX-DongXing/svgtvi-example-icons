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
  class: "feather feather-pen-tool",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "m12 19 7-7 3 3-7 7-3-3z"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("circle", {
  cx: "11",
  cy: "11",
  r: "2"
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