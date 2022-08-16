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
  d: "M736 896H288A224 224 0 0 1 64 672V352a224 224 0 0 1 224-224h448a224 224 0 0 1 224 224v320a224 224 0 0 1-224 224zM288 192c-88.22 0-160 71.78-160 160v320c0 88.22 71.78 160 160 160h448c88.22 0 160-71.78 160-160V352c0-88.22-71.78-160-160-160z",
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
      d: "M512 544a32 32 0 0 1-14.31-3.38L270.31 426.93A32 32 0 0 1 256 384a32 32 0 0 1 42.93-14.31l205.91 103a16 16 0 0 0 14.32 0l220.22-110.16a16 16 0 0 1 21.46 7.16l14.32 28.62a16 16 0 0 1-7.16 21.47L526.31 540.62A32 32 0 0 1 512 544z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_3)
  ]))
}
}

}