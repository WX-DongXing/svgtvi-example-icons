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
  d: "M512 952.47a63.88 63.88 0 0 1-37.64-12.28l-254.11-184.8A224.7 224.7 0 0 1 128 574.23v-277a96.19 96.19 0 0 1 56.27-87.39l288-130.9a96 96 0 0 1 79.46 0l288 130.9A96.21 96.21 0 0 1 896 297.21v277a224.7 224.7 0 0 1-92.25 181.16L549.64 940.19A63.86 63.86 0 0 1 512 952.47zM210.76 268.08A32.06 32.06 0 0 0 192 297.21v277a160.48 160.48 0 0 0 65.89 129.4L512 888.43l254.11-184.8A160.48 160.48 0 0 0 832 574.23v-277a32.06 32.06 0 0 0-18.76-29.13l-288-130.91a32 32 0 0 0-26.48 0l-288 130.91z",
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
        d: "M457.37 630.63 352 525.25a32 32 0 0 1 0-45.25 32 32 0 0 1 45.25 0l71.44 71.43a16 16 0 0 0 22.62 0l194.75-194.74a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63L502.63 630.63a32 32 0 0 1-45.26 0z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3)]);
    };
  }

};
exports.default = _default;