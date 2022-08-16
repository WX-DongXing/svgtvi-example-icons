"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

const _hoisted_1 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M512 864a32 32 0 0 1-32-32V480a32 32 0 0 1 64 0v352a32 32 0 0 1-32 32z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = ["fill"];

const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M894.87 395.63a239.35 239.35 0 0 0-103.24-64.75 63.58 63.58 0 0 1-40.39-38.06 256.05 256.05 0 0 0-478.48 0 63.58 63.58 0 0 1-40.39 38.06 239.76 239.76 0 0 0-20.79 450.4c21.15 8.77 44.42-6.93 44.42-29.83a32.37 32.37 0 0 0-19.79-29.72C173 694.7 127.92 632.17 128 559.81c.1-92.36 72.24-169.39 164.31-175.41l1.74-.16a30.85 30.85 0 0 0 27.86-27.31C335.16 262.9 416.88 192 512 192s176.84 70.9 190.09 164.93a32 32 0 0 0 29.6 27.47c92.07 6 164.21 83.05 164.31 175.41.08 72.36-45 134.89-108.21 161.92A32.37 32.37 0 0 0 768 751.45c0 22.9 23.27 38.6 44.42 29.83a239.79 239.79 0 0 0 82.45-385.65z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

var _default = {
  props: {
    primary: {
      type: String,
      default: '#3662EB'
    }
  },

  setup(__props) {
    return (_ctx, _cache) => {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, [_hoisted_2, (0, _vue.createElementVNode)("path", {
        d: "M512 896a32 32 0 0 1-18.35-5.78l-160-112a32 32 0 0 1-7.87-44.57 32 32 0 0 1 44.57-7.87l132.47 92.74a16 16 0 0 0 18.36 0l145.58-101.91a16 16 0 0 1 22.24 3.93l18.35 26.22a16 16 0 0 1-3.89 22.24L530.35 890.22A32 32 0 0 1 512 896z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3), _hoisted_4]);
    };
  }

};
exports.default = _default;