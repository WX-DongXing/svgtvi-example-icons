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
  d: "M589.59 946.83A222.68 222.68 0 0 1 434.05 884L164.41 623.64A225.16 225.16 0 0 1 96 462.49V256c0-88.22 71.78-160 160-160h206.49a225.16 225.16 0 0 1 161.15 68.41L884 434.05a224 224 0 0 1-2.76 314L748 881.22a222.71 222.71 0 0 1-156.43 65.6zM256 160a96.11 96.11 0 0 0-96 96v206.49a160.85 160.85 0 0 0 48.86 115.11L478.5 837.94a160.77 160.77 0 0 0 224.28-2L836 702.78c61.3-61.3 62.18-161.91 2-224.28L577.6 208.86A160.85 160.85 0 0 0 462.49 160z",
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
        d: "M416 544a128 128 0 1 1 128-128 128.14 128.14 0 0 1-128 128zm0-192a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64z",
        fill: __props.primary
      }, null, 8
      /* PROPS */
      , _hoisted_3)]);
    };
  }

};
exports.default = _default;