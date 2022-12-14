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
const _hoisted_2 = ["fill"]
const _hoisted_3 = /*#__PURE__*/_createElementVNode("path", {
  d: "m756.42 968.25-237-124.54a16 16 0 0 0-14.88 0l-237 124.54c-35.22 18.5-76.37-11.4-69.64-50.61l45.25-263.73a16 16 0 0 0-4.6-14.17L46.9 453c-28.5-27.76-12.78-76.16 26.59-81.88l264.94-38.48a16 16 0 0 0 12.05-8.75L469 83.89c17.61-35.67 68.47-35.67 86.08 0l118.48 240a16 16 0 0 0 12.05 8.75l264.94 38.48c39.37 5.72 55.09 54.12 26.59 81.88L785.41 639.74a16 16 0 0 0-4.6 14.17l45.25 263.73c6.73 39.21-34.42 69.11-69.64 50.61zM526.89 775.33l201.92 106.11A16 16 0 0 0 752 864.57l-38.54-224.72a32 32 0 0 1 9.21-28.33L886 452.4a16 16 0 0 0-8.86-27.29L651.4 392.32a32 32 0 0 1-24.09-17.5l-101-204.48a16 16 0 0 0-28.7 0l-101 204.48a32 32 0 0 1-24.09 17.5l-225.64 32.79A16 16 0 0 0 138 452.4l163.33 159.12a32 32 0 0 1 9.21 28.33L272 864.57a16 16 0 0 0 23.21 16.87l201.9-106.11a32 32 0 0 1 29.78 0z",
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
    _createElementVNode("path", {
      d: "m583.84 713.81-20.55-24.66a15.93 15.93 0 0 1 .89-21.46c26.11-26.08 41.49-59.9 45.77-100.75a223.71 223.71 0 0 0 .59-38.68 32.07 32.07 0 0 1 24.15-33.43 32 32 0 0 1 39.68 28.69 289.3 289.3 0 0 1-.51 47.51c-5.47 57.39-28.39 106.83-66.58 144a16 16 0 0 1-23.44-1.22z",
      fill: __props.primary
    }, null, 8 /* PROPS */, _hoisted_2),
    _hoisted_3
  ]))
}
}

}