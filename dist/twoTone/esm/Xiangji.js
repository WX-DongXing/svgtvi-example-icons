import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
}
const _hoisted_2 = /*#__PURE__*/_createElementVNode("path", {
  d: "M894.39 258.11A222.53 222.53 0 0 0 736 192.5h-25.67a16 16 0 0 1-15.56-12.26l-10.37-43.17a95.71 95.71 0 0 0-93.34-73.57H433.44a95.71 95.71 0 0 0-93.34 73.57l-10.37 43.17a16 16 0 0 1-15.56 12.26H288.5a224 224 0 0 0-224 224v255a224 224 0 0 0 224 224H736a224 224 0 0 0 224-224v-255a222.53 222.53 0 0 0-65.61-158.39zM896 671.5a160 160 0 0 1-160 160H288.5a160 160 0 0 1-160-160v-255a160 160 0 0 1 160-160h38.28A63.81 63.81 0 0 0 389 207.45L402.33 152a32 32 0 0 1 31.11-24.52h157.62A32 32 0 0 1 622.17 152l13.32 55.43a63.81 63.81 0 0 0 62.23 49.05H736a160 160 0 0 1 160 160z",
  fill: "currentColor"
}, null, -1 /* HOISTED */)
const _hoisted_3 = ["fill"]


export default {
  props: { 
          primary: {
            type: String,
            default: '#3662EB'
          }
        },
  setup(__props) {

        
        
return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("svg", _hoisted_1, [
    _hoisted_2,
    _createElementVNode("path", {
      d: "M512 704c-105.87 0-192-86.13-192-192s86.13-192 192-192 192 86.13 192 192-86.13 192-192 192zm0-320a128 128 0 1 0 128 128 128.14 128.14 0 0 0-128-128z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_3)
  ]))
}
}

}