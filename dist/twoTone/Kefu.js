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
  d: "M960 496c0-72-43.43-134-105.45-161.22a352.07 352.07 0 0 0-685.1 0C107.43 362 64 424 64 496c0 97 78.95 176 176 176h16a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32h-15.53C280.53 207.54 389.1 128 512 128s231.47 79.54 271.53 192H768a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h20.14C753.8 785.2 649.75 864 528 864h-48a32 32 0 0 0-32 32 32 32 0 0 0 32 32h48a336.05 336.05 0 0 0 329.94-272.31C918.15 627.7 960 566.65 960 496zm-736 90.51a16 16 0 0 1-21.31 15.1 112 112 0 0 1 0-211.22 16 16 0 0 1 21.31 15.1zm576 0v-181a16 16 0 0 1 21.31-15.1 112 112 0 0 1 0 211.22A16 16 0 0 1 800 586.51z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = ["fill"];
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
        d: "M512 768c-41.07 0-80-12.26-109.71-34.52-17.84-13.38-31.44-29.91-40-48.07-9.89-21.14 5.71-45.41 29-45.41a31.65 31.65 0 0 1 28.82 18.16C432.17 684.34 469.38 704 512 704c46.19 0 86-23.09 94.39-52.55A15.89 15.89 0 0 1 621.72 640h32.8a16 16 0 0 1 15.71 19c-5.31 28.4-22.34 54.81-48.52 74.44C592 755.74 553.07 768 512 768z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3)]);
    };
  }

};
exports.default = _default;