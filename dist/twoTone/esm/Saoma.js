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
  d: "M896 608v64a160 160 0 0 1-160 160H288a160 160 0 0 1-160-160v-64a32 32 0 0 0-32-32 32 32 0 0 0-32 32v64a224 224 0 0 0 224 224h448a224 224 0 0 0 224-224v-64a32 32 0 0 0-32-32 32 32 0 0 0-32 32zM128 416v-64a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v64a32 32 0 0 0 32 32 32 32 0 0 0 32-32v-64a224 224 0 0 0-224-224H288A224 224 0 0 0 64 352v64a32 32 0 0 0 32 32 32 32 0 0 0 32-32z",
  fill: "currentColor"
}, null, -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createElementVNode("path", {
  d: "M352 384q32 0 32 32v192q0 32-32 32t-32-32V416q0-32 32-32Z",
  fill: "currentColor"
}, null, -1 /* HOISTED */)
const _hoisted_4 = ["fill"]
const _hoisted_5 = /*#__PURE__*/_createElementVNode("path", {
  d: "M672 384q32 0 32 32v192q0 32-32 32t-32-32V416q0-32 32-32Z",
  fill: "currentColor"
}, null, -1 /* HOISTED */)


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
    _hoisted_3,
    _createElementVNode("path", {
      d: "M512 384a32 32 0 0 1 32 32v208a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V416a32 32 0 0 1 32-32z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_4),
    _hoisted_5
  ]))
}
}

}