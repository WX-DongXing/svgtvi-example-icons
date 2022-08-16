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
  d: "M864 960a32 32 0 0 1-18.82-6.12L568.46 752.63a95.74 95.74 0 0 0-112.92 0L178.82 953.88A32 32 0 0 1 128 928V289A224 224 0 0 1 352 65h320a224 224 0 0 1 224 224v639a32 32 0 0 1-32 32zM512 670.27a159 159 0 0 1 94.11 30.6l200.48 145.81A16 16 0 0 0 832 833.74V289a160 160 0 0 0-160-160H352a160 160 0 0 0-160 160v544.74a16 16 0 0 0 25.41 12.94l200.48-145.81a159 159 0 0 1 94.11-30.6z",
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
      d: "M352 320h208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H352a32 32 0 0 1-32-32 32 32 0 0 1 32-32z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_3)
  ]))
}
}

}