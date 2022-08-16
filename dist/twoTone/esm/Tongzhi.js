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
  d: "m930.08 705.5-22.47-67.08A223.66 223.66 0 0 1 896 567.25V448A383.7 383.7 0 0 0 514.49 64a377.22 377.22 0 0 0-149.44 29.64A387.5 387.5 0 0 0 128 450.3v117a223.66 223.66 0 0 1-11.61 71.17L93.92 705.5a96 96 0 0 0 91 126.5H331c26.42 74.5 97.58 128 181 128s154.6-53.5 181-128h146a96 96 0 0 0 91-126.5zM512 896a127.56 127.56 0 0 1-89.52-36.6c-10.22-10-3.07-27.4 11.24-27.4h156.56c14.31 0 21.46 17.38 11.24 27.4A127.56 127.56 0 0 1 512 896zm353-141.31A31.64 31.64 0 0 1 839 768H184.94a32 32 0 0 1-30.34-42.17l22.48-67.08a287.47 287.47 0 0 0 14.92-91.5V450.3c0-86.38 34-167.75 95.75-229.1C348.28 161.05 427.86 128 512 128h2c175.38 1.12 318 144.67 318 320v119.25a287.47 287.47 0 0 0 14.92 91.5l22.48 67.08a31.66 31.66 0 0 1-4.4 28.86z",
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
      d: "M512 256a32 32 0 0 1 32 32v144a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V288a32 32 0 0 1 32-32z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_3)
  ]))
}
}

}