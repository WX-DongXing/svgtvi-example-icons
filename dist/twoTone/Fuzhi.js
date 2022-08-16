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
  d: "M830.39 129.61A222.53 222.53 0 0 0 672 64H416c-78.22 0-143.5 56.42-157.3 130.7C184.42 208.5 128 273.78 128 352v448c0 88.22 71.78 160 160 160h320c78.22 0 143.5-56.42 157.3-130.7C839.58 815.5 896 750.22 896 672V288a222.53 222.53 0 0 0-65.61-158.39zM704 800a96.11 96.11 0 0 1-96 96H288a96.11 96.11 0 0 1-96-96V352a96.11 96.11 0 0 1 96-96h320a96.11 96.11 0 0 1 96 96zm128-128a95.92 95.92 0 0 1-38.52 76.84c-10.49 7.87-25.48.22-25.48-12.9V352a160 160 0 0 0-160-160H352.06c-13.12 0-20.77-15-12.9-25.48A95.92 95.92 0 0 1 416 128h256a160 160 0 0 1 160 160z",
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
        d: "M288 704h144a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H288a32 32 0 0 1-32-32 32 32 0 0 1 32-32z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3)]);
    };
  }

};
exports.default = _default;