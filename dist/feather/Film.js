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
  class: "feather feather-film",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "2.18",
  ry: "2.18"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"
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