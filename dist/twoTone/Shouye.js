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
  d: "M930.17 305.75a224.32 224.32 0 0 0-81.53-81.94l-224-130.31a224.47 224.47 0 0 0-225.28 0l-224 130.31A224 224 0 0 0 64 417.43V672a224 224 0 0 0 224 224h448a224 224 0 0 0 224-224V417.43a224.25 224.25 0 0 0-29.83-111.68zM384 816V672a96 96 0 0 1 96-96h64a96 96 0 0 1 96 96v144a16 16 0 0 1-16 16H400a16 16 0 0 1-16-16zm512-144c0 88.22-71.78 160-160 160h-32V672c0-88.22-71.78-160-160-160h-64c-88.22 0-160 71.78-160 160v160h-32c-88.22 0-160-71.78-160-160V417.43a160.51 160.51 0 0 1 79.55-138.3l224-130.31a160.3 160.3 0 0 1 160.9 0l224 130.31A160.51 160.51 0 0 1 896 417.43z",
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
        d: "M368 448H224a32 32 0 0 1-32-32 32 32 0 0 1 32-32h144a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3)]);
    };
  }

};
exports.default = _default;