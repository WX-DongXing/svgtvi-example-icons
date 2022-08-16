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
  d: "m920 874.75-126.7-126.7a32 32 0 0 1-3.15-41.58 385 385 0 1 0-83.68 83.68 32 32 0 0 1 41.58 3.15L874.75 920a32 32 0 0 0 45.25 0 32 32 0 0 0 0-45.25zM480 800c-176.45 0-320-143.55-320-320s143.55-320 320-320 320 143.55 320 320-143.55 320-320 320z",
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
      d: "M512 240.13a16 16 0 0 0-15.39-16q-4.29-.13-8.61-.13a264.08 264.08 0 0 0-261.52 227.57A32 32 0 0 0 258.19 488a31.92 31.92 0 0 0 31.68-27.43C303.29 363.22 387 288 488 288c2.45 0 4.88.05 7.3.13a16 16 0 0 0 16.7-16z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_3)
  ]))
}
}

}