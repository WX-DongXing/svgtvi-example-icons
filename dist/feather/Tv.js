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
  class: "feather feather-tv",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("rect", {
  x: "2",
  y: "7",
  width: "20",
  height: "15",
  rx: "2",
  ry: "2"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "m17 2-5 5-5-5"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = [_hoisted_2, _hoisted_3];

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

var _default = {
  render
};
exports.default = _default;