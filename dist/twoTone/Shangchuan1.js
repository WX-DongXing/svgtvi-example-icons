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
  d: "M704 928H320A224 224 0 0 1 96 704V320A224 224 0 0 1 320 96h384a224 224 0 0 1 224 224v384a224 224 0 0 1-224 224zM320 160c-88.22 0-160 71.78-160 160v384c0 88.22 71.78 160 160 160h384c88.22 0 160-71.78 160-160V320c0-88.22-71.78-160-160-160z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

const _hoisted_3 = ["fill"];

const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("path", {
  d: "M695.12 499.62 529.75 389.37a32 32 0 0 0-35.5 0L328.88 499.62A32 32 0 0 0 320 544a32 32 0 0 0 44.38 8.88l103.18-68.8a8 8 0 0 1 12.44 6.66V736a32 32 0 0 0 32 32 32 32 0 0 0 32-32V490.74a8 8 0 0 1 12.44-6.66l103.18 68.8A32 32 0 0 0 704 544a32 32 0 0 0-8.88-44.38z",
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
        d: "M352 256h336a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H352a32 32 0 0 1-32-32 32 32 0 0 1 32-32z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3), _hoisted_4]);
    };
  }

};
exports.default = _default;