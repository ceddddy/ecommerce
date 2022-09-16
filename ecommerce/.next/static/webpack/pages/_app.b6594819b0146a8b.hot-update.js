"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Hp\\\\Desktop\\\\ecommerce\\\\ecommerce\\\\context\\\\StateContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar StateContext = function StateContext(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showCart = _useState[0],\n      setShowCart = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      cartItems = _useState2[0],\n      setCartItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalPrice = _useState3[0],\n      setTotalPrice = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalQuantities = _useState4[0],\n      setTotalQuantities = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      qty = _useState5[0],\n      setQty = _useState5[1];\n\n  var foundProduct;\n  var index;\n\n  var onAdd = function onAdd(product, quantity) {\n    var checkProductInCart = cartItems.find(function (item) {\n      return item._id === product._id;\n    });\n    setTotalPrice(function (prevTotalPrice) {\n      return prevTotalPrice + product.price * quantity;\n    });\n    setTotalQuantities(function (prevTotalQuantities) {\n      return prevTotalQuantities + quantity;\n    });\n\n    if (checkProductInCart) {\n      var updatedCartItems = cartItems.map(function (cartProduct) {\n        if (cartProduct._id === product._id) return _objectSpread(_objectSpread({}, cartProduct), {}, {\n          quantity: cartProduct.quantity + quantity\n        });\n      });\n      setCartItems(updatedCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems([].concat((0,C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cartItems), [_objectSpread({}, product)]));\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n  };\n\n  var onRemove = function onRemove(product) {\n    foundProduct = cartItems.find(function (item) {\n      return item._id === product._id;\n    });\n    var newCartItems = cartItems.filter(function (item) {\n      return item._id !== product._id;\n    });\n    setTotalPrice(function (prevTotalPrice) {\n      return prevTotalPrice - foundProduct.price * foundProduct.quantity;\n    });\n    setTotalQuantities(function (prevTotalQuantities) {\n      return prevTotalQuantities - foundProduct.quantity;\n    });\n    setCartItems(newCartItems);\n  };\n\n  var toggleCartItemQuanitity = function toggleCartItemQuanitity(id, value) {\n    foundProduct = cartItems.find(function (item) {\n      return item._id === id;\n    });\n    index = cartItems.findIndex(function (product) {\n      return product._id === id;\n    });\n    var newCartItems = cartItems.filter(function (item) {\n      return item._id !== id;\n    });\n\n    if (value === 'inc') {\n      setCartItems([].concat((0,C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newCartItems), [_objectSpread(_objectSpread({}, foundProduct), {}, {\n        quantity: foundProduct.quantity + 1\n      })]));\n      setTotalPrice(function (prevTotalPrice) {\n        return prevTotalPrice + foundProduct.price;\n      });\n      setTotalQuantities(function (prevTotalQuantities) {\n        return prevTotalQuantities + 1;\n      });\n    } else if (value === 'dec') {\n      if (foundProduct.quantity > 1) {\n        setCartItems([].concat((0,C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newCartItems), [_objectSpread(_objectSpread({}, foundProduct), {}, {\n          quantity: foundProduct.quantity - 1\n        })]));\n        setTotalPrice(function (prevTotalPrice) {\n          return prevTotalPrice - foundProduct.price;\n        });\n        setTotalQuantities(function (prevTotalQuantities) {\n          return prevTotalQuantities - 1;\n        });\n      }\n    }\n  };\n\n  var incQty = function incQty() {\n    setQty(function (prevQty) {\n      return prevQty + 1;\n    });\n  };\n\n  var decQty = function decQty() {\n    setQty(function (prevQty) {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Context.Provider, {\n    value: {\n      showCart: showCart,\n      setShowCart: setShowCart,\n      cartItems: cartItems,\n      totalPrice: totalPrice,\n      totalQuantities: totalQuantities,\n      qty: qty,\n      incQty: incQty,\n      decQty: decQty,\n      onAdd: onAdd,\n      toggleCartItemQuanitity: toggleCartItemQuanitity,\n      onRemove: onRemove,\n      setCartItems: setCartItems,\n      setTotalPrice: setTotalPrice,\n      setTotalQuantities: setTotalQuantities\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(StateContext, \"lTN9mPmtXpsm72zCYW+oCcRZHaw=\");\n\n_c = StateContext;\nvar useStateContext = function useStateContext() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFBQSxNQUFNLEVBQU5BLE1BUks7QUFTTHhCLE1BQUFBLEtBQUssRUFBTEEsS0FUSztBQVVMa0IsTUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFWSztBQVdMSCxNQUFBQSxRQUFRLEVBQVJBLFFBWEs7QUFZTHhCLE1BQUFBLFlBQVksRUFBWkEsWUFaSztBQWFMRSxNQUFBQSxhQUFhLEVBQWJBLGFBYks7QUFjTEUsTUFBQUEsa0JBQWtCLEVBQWxCQTtBQWRLLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWtCR1IsUUFsQkgsQ0FERjtBQXNCRCxDQS9GTTs7R0FBTUQ7O0tBQUFBO0FBaUdOLElBQU11QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUE7O0FBQUEsU0FBTTVDLGlEQUFVLENBQUNJLE9BQUQsQ0FBaEI7QUFBQSxDQUF4Qjs7SUFBTXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvU3RhdGVDb250ZXh0LmpzP2IxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93Q2FydCwgc2V0U2hvd0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsUXVhbnRpdGllcywgc2V0VG90YWxRdWFudGl0aWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgbGV0IGZvdW5kUHJvZHVjdDtcclxuICBsZXQgaW5kZXg7XHJcblxyXG4gIGNvbnN0IG9uQWRkID0gKHByb2R1Y3QsIHF1YW50aXR5KSA9PiB7XHJcbiAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuICAgIFxyXG4gICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5KTtcclxuICAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdGllcykgPT4gcHJldlRvdGFsUXVhbnRpdGllcyArIHF1YW50aXR5KTtcclxuICAgIFxyXG4gICAgaWYoY2hlY2tQcm9kdWN0SW5DYXJ0KSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKChjYXJ0UHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIGlmKGNhcnRQcm9kdWN0Ll9pZCA9PT0gcHJvZHVjdC5faWQpIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jYXJ0UHJvZHVjdCxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICBcclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHsgLi4ucHJvZHVjdCB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9hc3Quc3VjY2VzcyhgJHtxdHl9ICR7cHJvZHVjdC5uYW1lfSBhZGRlZCB0byB0aGUgY2FydC5gKTtcclxuICB9IFxyXG5cclxuICBjb25zdCBvblJlbW92ZSA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBmb3VuZFByb2R1Y3QgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBwcm9kdWN0Ll9pZCk7XHJcblxyXG4gICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlIC1mb3VuZFByb2R1Y3QucHJpY2UgKiBmb3VuZFByb2R1Y3QucXVhbnRpdHkpO1xyXG4gICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXZUb3RhbFF1YW50aXRpZXMgPT4gcHJldlRvdGFsUXVhbnRpdGllcyAtIGZvdW5kUHJvZHVjdC5xdWFudGl0eSk7XHJcbiAgICBzZXRDYXJ0SXRlbXMobmV3Q2FydEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNhcnRJdGVtUXVhbml0aXR5ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgZm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZClcclxuICAgIGluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleCgocHJvZHVjdCkgPT4gcHJvZHVjdC5faWQgPT09IGlkKTtcclxuICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBpZClcclxuXHJcbiAgICBpZih2YWx1ZSA9PT0gJ2luYycpIHtcclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5uZXdDYXJ0SXRlbXMsIHsgLi4uZm91bmRQcm9kdWN0LCBxdWFudGl0eTogZm91bmRQcm9kdWN0LnF1YW50aXR5ICsgMSB9IF0pO1xyXG4gICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBmb3VuZFByb2R1Y3QucHJpY2UpXHJcbiAgICAgIHNldFRvdGFsUXVhbnRpdGllcyhwcmV2VG90YWxRdWFudGl0aWVzID0+IHByZXZUb3RhbFF1YW50aXRpZXMgKyAxKVxyXG4gICAgfSBlbHNlIGlmKHZhbHVlID09PSAnZGVjJykge1xyXG4gICAgICBpZiAoZm91bmRQcm9kdWN0LnF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgIHNldENhcnRJdGVtcyhbLi4ubmV3Q2FydEl0ZW1zLCB7IC4uLmZvdW5kUHJvZHVjdCwgcXVhbnRpdHk6IGZvdW5kUHJvZHVjdC5xdWFudGl0eSAtIDEgfSBdKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgLSBmb3VuZFByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXZUb3RhbFF1YW50aXRpZXMgPT4gcHJldlRvdGFsUXVhbnRpdGllcyAtIDEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGluY1F0eSA9ICgpID0+IHtcclxuICAgIHNldFF0eSgocHJldlF0eSkgPT4gcHJldlF0eSArIDEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0UXR5KChwcmV2UXR5KSA9PiB7XHJcbiAgICAgIGlmKHByZXZRdHkgLSAxIDwgMSkgcmV0dXJuIDE7XHJcbiAgICAgXHJcbiAgICAgIHJldHVybiBwcmV2UXR5IC0gMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc2hvd0NhcnQsXHJcbiAgICAgICAgc2V0U2hvd0NhcnQsXHJcbiAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgdG90YWxRdWFudGl0aWVzLFxyXG4gICAgICAgIHF0eSxcclxuICAgICAgICBpbmNRdHksXHJcbiAgICAgICAgZGVjUXR5LFxyXG4gICAgICAgIG9uQWRkLFxyXG4gICAgICAgIHRvZ2dsZUNhcnRJdGVtUXVhbml0aXR5LFxyXG4gICAgICAgIG9uUmVtb3ZlLFxyXG4gICAgICAgIHNldENhcnRJdGVtcyxcclxuICAgICAgICBzZXRUb3RhbFByaWNlLFxyXG4gICAgICAgIHNldFRvdGFsUXVhbnRpdGllcyBcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsImZvdW5kUHJvZHVjdCIsImluZGV4Iiwib25BZGQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsInByZXZUb3RhbFByaWNlIiwicHJpY2UiLCJwcmV2VG90YWxRdWFudGl0aWVzIiwidXBkYXRlZENhcnRJdGVtcyIsIm1hcCIsImNhcnRQcm9kdWN0Iiwic3VjY2VzcyIsIm5hbWUiLCJvblJlbW92ZSIsIm5ld0NhcnRJdGVtcyIsImZpbHRlciIsInRvZ2dsZUNhcnRJdGVtUXVhbml0aXR5IiwiaWQiLCJ2YWx1ZSIsImZpbmRJbmRleCIsImluY1F0eSIsInByZXZRdHkiLCJkZWNRdHkiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});