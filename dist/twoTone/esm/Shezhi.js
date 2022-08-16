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
  d: "M512 967.53a160 160 0 0 1-80-21.36l-256-147.8A160.45 160.45 0 0 1 96 659.8V364.2a160.45 160.45 0 0 1 80-138.57l256-147.8a160.44 160.44 0 0 1 160 0l256 147.8a160.45 160.45 0 0 1 80 138.57v295.6a160.45 160.45 0 0 1-80 138.57l-256 147.8a160 160 0 0 1-80 21.36zm0-847.09a96 96 0 0 0-48 12.82l-256 147.8a96.26 96.26 0 0 0-48 83.14v295.6a96.26 96.26 0 0 0 48 83.14l256 147.8a96.29 96.29 0 0 0 96 0l256-147.8 16 27.71-16-27.71a96.26 96.26 0 0 0 48-83.14V364.2a96.26 96.26 0 0 0-48-83.14l-256-147.8a95.93 95.93 0 0 0-48-12.82z",
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