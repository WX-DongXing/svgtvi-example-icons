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
  d: "M512 960A448.11 448.11 0 0 1 337.61 99.22a448.11 448.11 0 0 1 348.78 825.56A445.19 445.19 0 0 1 512 960zm0-832c-211.74 0-384 172.26-384 384s172.26 384 384 384 384-172.26 384-384-172.26-384-384-384z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M544 512h-64V256a32 32 0 0 1 32-32 32 32 0 0 1 32 32z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = ["fill"];
var _default = {
  props: {
    primary: {
      type: String,
      default: '#3662EB'
    }
  },

  setup(__props) {
    return (_ctx, _cache) => {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, [_hoisted_2, _hoisted_3, (0, _vue.createElementVNode)("path", {
        d: "M628.69 673.94 489.37 534.63a32 32 0 0 1 0-45.26 32 32 0 0 1 45.26 0l139.31 139.32a16 16 0 0 1 0 22.62l-22.63 22.63a16 16 0 0 1-22.62 0z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_4)]);
    };
  }

};
exports.default = _default;