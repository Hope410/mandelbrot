!function(n){var o={};function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=o,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./src/index.js")}({"../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColors.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColors.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: createColors */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColors", function() { return createColors; });\nfunction createColors(from, to, shades, alpha = [\n    from.length === 4 ? from[3] : to.length === 4 ? to[3] : 1,\n    to.length === 4 ? to[3] : from.length === 4 ? from[3] : 1\n]) {\n    const start = [...from];\n    const diff = [\n        to[0] - from[0],\n        to[1] - from[1],\n        to[2] - from[2],\n        alpha[1] - alpha[0]\n    ];\n    if (start.length === 3)\n        start.push(alpha[0]);\n    const inc = 1 / Math.max(shades - 1, 1);\n    const rgba = [];\n    for (let i = 0; i < shades; i++) {\n        const color = [\n            Math.round(start[0] + i * diff[0] * inc),\n            Math.round(start[1] + i * diff[1] * inc),\n            Math.round(start[2] + i * diff[2] * inc),\n            start[3] + i * diff[3] * inc\n        ];\n        rgba.push(color);\n    }\n    return rgba;\n}\n//# sourceMappingURL=createColors.js.map\n\n//# sourceURL=webpack:////rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColors.js?')},"../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColorsFromMap.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColorsFromMap.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: createColorsFromMap */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorsFromMap", function() { return createColorsFromMap; });\n/* harmony import */ var _createColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createColors */ "../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColors.js");\n\n/**\n * Create colors with specified color map.\n */\nfunction createColorsFromMap(colormap, shades, alpha) {\n    if (shades < colormap.length) {\n        throw new Error(`Requires at least ${colormap.length} shades.`);\n    }\n    const result = [];\n    const steps = [];\n    for (let i = 0; i < colormap.length; i++) {\n        steps.push(Math.round(colormap[i].index * shades));\n    }\n    for (let i = 0; i < colormap.length - 1; i++) {\n        const n = steps[i + 1] - steps[i];\n        const from = colormap[i].rgb;\n        const to = colormap[i + 1].rgb;\n        result.push(...Object(_createColors__WEBPACK_IMPORTED_MODULE_0__["createColors"])(from, to, n, alpha));\n    }\n    return result;\n}\n//# sourceMappingURL=createColorsFromMap.js.map\n\n//# sourceURL=webpack:////rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColorsFromMap.js?')},"../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/index.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/index.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: createColors, createColorsFromMap, rgbHex, rgbaString */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createColors */ "../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColors.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createColors", function() { return _createColors__WEBPACK_IMPORTED_MODULE_0__["createColors"]; });\n\n/* harmony import */ var _createColorsFromMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createColorsFromMap */ "../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/createColorsFromMap.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createColorsFromMap", function() { return _createColorsFromMap__WEBPACK_IMPORTED_MODULE_1__["createColorsFromMap"]; });\n\n/* harmony import */ var _rgbHex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rgbHex */ "../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbHex.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbHex", function() { return _rgbHex__WEBPACK_IMPORTED_MODULE_2__["rgbHex"]; });\n\n/* harmony import */ var _rgbaString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgbaString */ "../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbaString.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbaString", function() { return _rgbaString__WEBPACK_IMPORTED_MODULE_3__["rgbaString"]; });\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:////rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/index.js?')},"../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbHex.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbHex.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: rgbHex */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbHex\", function() { return rgbHex; });\n/**\n * Convert `RGB` to `#rgb`\n * JavaScript note: no check for array length, use it properly.\n */\nfunction rgbHex(rgb) {\n    let hex = '#';\n    for (let i = 0; i < 3; i++) {\n        hex += d2h(rgb[i]);\n    }\n    return hex;\n}\nfunction d2h(d) {\n    let s = (+d).toString(16);\n    return s.length < 2 ? '0' + s : s;\n}\n//# sourceMappingURL=rgbHex.js.map\n\n//# sourceURL=webpack:////rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbHex.js?")},"../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbaString.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbaString.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: rgbaString */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbaString\", function() { return rgbaString; });\nfunction rgbaString(rgba) {\n    return 'rgba(' + rgba.join(',') + ')';\n}\n//# sourceMappingURL=rgbaString.js.map\n\n//# sourceURL=webpack:////rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/rgbaString.js?")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("const { createColors, rgbHex } = __webpack_require__(/*! color-map */ \"../rbd/pnpm-volume/d494be03-9c99-4b56-8000-ce0fa156de44/node_modules/.registry.npmjs.org/color-map/1.1.0/node_modules/color-map/dist-es2015/index.js\");\n\nconst canvas = document.getElementById('cnvs');\nconst width = 500;\nconst height = 500;\n\ncanvas.width = width;\ncanvas.height = height;\n\nlet image = math.zeros(width, height);\nconst ctx = canvas.getContext('2d');\n\nconst drawDot = (x, y, color) => {\n  ctx.fillStyle = color;\n  ctx.fillRect(x, y, 1, 1);\n};\n\nconst \n    p_center = -0.793191078177363, \n    q_center = 0.16093721735804;\n      \nconst scalefactor = 0.02;\n\nconst \n  pmin = p_center - scalefactor, \n  pmax = p_center + scalefactor, \n  qmin = q_center - scalefactor, \n  qmax = q_center + scalefactor,\n  max_iterations = 255,\n  infinity_border = 10;\n\nconst repeat = (a, n, b = []) => n > 0 ? repeat(a, n - 1, b.concat(a(n))) : b;\n\nconst map = repeat((i) => createColors([0, 0, 128], [255, 16*4 - i*4, 128], 16), 16);\n// console.log(map.length)\n\nconst linspace = (min, max, fractions) => {\n  const range = max - min;\n  return [...new Array(fractions)].map((_, i) => \n    +math.format(\n      math.evaluate(`${min} + (${range}/${fractions})*${i}`), {precision: 14}\n    )\n  );\n}\n\nconst abs = c => math.sqrt(math.add(c.re*c.re, c.im*c.im));\n\n// console.log(math)\n// console.log(linspace(pmin, pmax, width))\n\nconst render = () => {\n  const prange = linspace(pmin, pmax, width);\n  const qrange = linspace(qmin, qmax, height);\n\n  prange.forEach((p, ip) => {\n    qrange.forEach((q, iq) => {\n      const c = math.complex(p, q);\n      // console.log(c)\n      let z = 0;\n\n      for(let k = 0; k < max_iterations; k++){\n        z = math.add(math.pow(z, 2), c);\n\n        if(abs(z) > infinity_border){\n          // console.log(c);\n          image._data[ip][iq] = k;\n          break;\n        }\n      }\n    })\n  })\n\n  // image = math.transpose(image);\n  // console.log(image);\n  image._data.forEach((p, i) => {\n    p.forEach((q, j) => {\n      if(q != 0){\n\n        drawDot(i, j, rgbHex(map[q]));\n      }else{\n        drawDot(i, j, `rgba(0, 0, 0)`);\n      }\n    })\n  });\n}\n\nrender();\n\n// let z = 0;\n// for(let i = 0; i < 3; i++){\n//   z = math.add(math.square(z), math.complex(2, i));\n// }\n\n// console.log(z)\n\n//# sourceURL=webpack:///./src/index.js?")}});