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
  d: "M736 896H288A224 224 0 0 1 64 672V352a224 224 0 0 1 224-224h448a224 224 0 0 1 224 224v320a224 224 0 0 1-224 224zM288 192c-88.22 0-160 71.78-160 160v320c0 88.22 71.78 160 160 160h448c88.22 0 160-71.78 160-160V352c0-88.22-71.78-160-160-160z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M528 736a32 32 0 0 1-27.17-15l-55.32-88.52a16 16 0 0 0-21.63-5.34l-124.12 72.38A32 32 0 0 1 256 688a32 32 0 0 1 11.52-43.76l164.36-95.88A32 32 0 0 1 475.14 559l55.54 88.87a16 16 0 0 0 21.51 5.41l156.15-89.23A32 32 0 0 1 752 576a32 32 0 0 1-11.91 43.66L543.88 731.78A31.84 31.84 0 0 1 528 736z",
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
        d: "M640 384a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_4)]);
    };
  }

};
exports.default = _default;