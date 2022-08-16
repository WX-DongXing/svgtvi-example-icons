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
  d: "M830.39 129.61A222.53 222.53 0 0 0 672 64H352a224 224 0 0 0-224 224v448a224 224 0 0 0 224 224h320a224 224 0 0 0 224-224V288a222.53 222.53 0 0 0-65.61-158.39zM704 144.89V224a32 32 0 0 1-32 32H544a32 32 0 0 1-32-32v-80a16 16 0 0 1 16-16h144a160.34 160.34 0 0 1 17.77 1A16 16 0 0 1 704 144.89zM832 736a160 160 0 0 1-160 160H352a160 160 0 0 1-160-160V288a160 160 0 0 1 160-160h96v96a96 96 0 0 0 96 96h128a96 96 0 0 0 96-96v-26.39c0-15.15 19-21.75 28.52-10A159.25 159.25 0 0 1 832 288z",
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
        d: "M352 704h144a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H352a32 32 0 0 1-32-32 32 32 0 0 1 32-32z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3)]);
    };
  }

};
exports.default = _default;