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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Hp\\\\Desktop\\\\ecommerce\\\\ecommerce\\\\context\\\\StateContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar StateContext = function StateContext(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showCart = _useState[0],\n      setShowCart = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      cartItems = _useState2[0],\n      setCartItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      totalPrice = _useState3[0],\n      setTotalPrice = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      totalQuantities = _useState4[0],\n      setTotalQuantities = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      qty = _useState5[0],\n      setQty = _useState5[1];\n\n  var onAdd = function onAdd(product, quantity) {\n    var checkProductInCart = cartItems.find(function (item) {\n      return item._id === product._id;\n    });\n    setTotalPrice(function (prevTotalPrice) {\n      return prevTotalPrice + product.price * quantity;\n    });\n    setTotalQuantities(function (prevTotalQuantities) {\n      return prevTotalQuantities + quantity;\n    });\n\n    if (checkProductInCart) {\n      var updatedCartItems = cartItems.map(function (cartProduct) {\n        if (cartProduct._id === product._id) return _objectSpread(_objectSpread({}, cartProduct), {}, {\n          quantity: cartProduct.quantity + quantity\n        });\n      });\n      setCartItems(updatedCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems([].concat((0,C_Users_Hp_Desktop_ecommerce_ecommerce_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cartItems), [_objectSpread({}, product)]));\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n  };\n\n  var incQty = function incQty() {\n    setQty(function (prevQty) {\n      return prevQty + 1;\n    });\n  };\n\n  var decQty = function decQty() {\n    setQty(function (prevQty) {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Context.Provider, {\n    value: {\n      showCart: showCart,\n      cartItems: cartItems,\n      totalPrice: totalPrice,\n      totalQuantities: totalQuantities,\n      qty: qty,\n      incQty: incQty,\n      decQty: decQty,\n      onAdd: onAdd\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(StateContext, \"JEAb5MscqNZhyo/jw1/M8zH7uY4=\");\n\n_c = StateContext;\nvar useStateContext = function useStateContext() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1PLE9BQU8sZ0JBQUdOLG9EQUFhLEVBQTdCO0FBRU8sSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzVDLGtCQUFnQ04sK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NSLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9TLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQW9DViwrQ0FBUSxFQUE1QztBQUFBLE1BQU9XLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQThDWiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEQ7QUFBQSxNQUFPYSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBc0JkLCtDQUFRLENBQUMsQ0FBRCxDQUE5QjtBQUFBLE1BQU9lLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQyxRQUFNQyxrQkFBa0IsR0FBR1gsU0FBUyxDQUFDWSxJQUFWLENBQ3pCLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNDLEdBQUwsS0FBYUwsT0FBTyxDQUFDSyxHQUEvQjtBQUFBLEtBRHlCLENBQTNCO0FBSUFYLElBQUFBLGFBQWEsQ0FDWCxVQUFDWSxjQUFEO0FBQUEsYUFBb0JBLGNBQWMsR0FBR04sT0FBTyxDQUFDTyxLQUFSLEdBQWdCTixRQUFyRDtBQUFBLEtBRFcsQ0FBYjtBQUdBTCxJQUFBQSxrQkFBa0IsQ0FBQyxVQUFDWSxtQkFBRDtBQUFBLGFBQXlCQSxtQkFBbUIsR0FBR1AsUUFBL0M7QUFBQSxLQUFELENBQWxCOztBQUVBLFFBQUlDLGtCQUFKLEVBQXdCO0FBQ3RCLFVBQU1PLGdCQUFnQixHQUFHbEIsU0FBUyxDQUFDbUIsR0FBVixDQUFjLFVBQUNDLFdBQUQsRUFBaUI7QUFDdEQsWUFBSUEsV0FBVyxDQUFDTixHQUFaLEtBQW9CTCxPQUFPLENBQUNLLEdBQWhDLEVBQ0UsdUNBQ0tNLFdBREw7QUFFRVYsVUFBQUEsUUFBUSxFQUFFVSxXQUFXLENBQUNWLFFBQVosR0FBdUJBO0FBRm5DO0FBSUgsT0FOd0IsQ0FBekI7QUFRQVQsTUFBQUEsWUFBWSxDQUFDaUIsZ0JBQUQsQ0FBWjtBQUVELEtBWEQsTUFXTztBQUNMVCxNQUFBQSxPQUFPLENBQUNDLFFBQVIsR0FBbUJBLFFBQW5CO0FBRUFULE1BQUFBLFlBQVksMEtBQUtELFNBQUwsc0JBQXFCUyxPQUFyQixJQUFaO0FBQ0Q7O0FBQ0RoQixJQUFBQSwwREFBQSxXQUFpQmEsR0FBakIsY0FBd0JHLE9BQU8sQ0FBQ2EsSUFBaEM7QUFDRCxHQTNCRDs7QUE2QkEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQmhCLElBQUFBLE1BQU0sQ0FBQyxVQUFDaUIsT0FBRDtBQUFBLGFBQWFBLE9BQU8sR0FBRyxDQUF2QjtBQUFBLEtBQUQsQ0FBTjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQmxCLElBQUFBLE1BQU0sQ0FBQyxVQUFDaUIsT0FBRCxFQUFhO0FBQ2xCLFVBQUlBLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBbEIsRUFBcUIsT0FBTyxDQUFQO0FBRXJCLGFBQU9BLE9BQU8sR0FBRyxDQUFqQjtBQUNELEtBSkssQ0FBTjtBQUtELEdBTkQ7O0FBUUEsc0JBQ0UsMkRBQUMsT0FBRCxDQUFTLFFBQVQ7QUFDRSxTQUFLLEVBQUU7QUFDTDFCLE1BQUFBLFFBQVEsRUFBUkEsUUFESztBQUVMRSxNQUFBQSxTQUFTLEVBQVRBLFNBRks7QUFHTEUsTUFBQUEsVUFBVSxFQUFWQSxVQUhLO0FBSUxFLE1BQUFBLGVBQWUsRUFBZkEsZUFKSztBQUtMRSxNQUFBQSxHQUFHLEVBQUhBLEdBTEs7QUFNTGlCLE1BQUFBLE1BQU0sRUFBTkEsTUFOSztBQU9MRSxNQUFBQSxNQUFNLEVBQU5BLE1BUEs7QUFRTGpCLE1BQUFBLEtBQUssRUFBTEE7QUFSSyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZR1gsUUFaSCxDQURGO0FBZ0JELENBaEVNOztHQUFNRDs7S0FBQUE7QUFrRU4sSUFBTThCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQTs7QUFBQSxTQUFNcEMsaURBQVUsQ0FBQ0ssT0FBRCxDQUFoQjtBQUFBLENBQXhCOztJQUFNK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9TdGF0ZUNvbnRleHQuanM/YjFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3RvdGFsUXVhbnRpdGllcywgc2V0VG90YWxRdWFudGl0aWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkXHJcbiAgICApO1xyXG5cclxuICAgIHNldFRvdGFsUHJpY2UoXHJcbiAgICAgIChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBwcm9kdWN0LnByaWNlICogcXVhbnRpdHlcclxuICAgICk7XHJcbiAgICBzZXRUb3RhbFF1YW50aXRpZXMoKHByZXZUb3RhbFF1YW50aXRpZXMpID0+IHByZXZUb3RhbFF1YW50aXRpZXMgKyBxdWFudGl0eSk7XHJcblxyXG4gICAgaWYgKGNoZWNrUHJvZHVjdEluQ2FydCkge1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoY2FydFByb2R1Y3QpID0+IHtcclxuICAgICAgICBpZiAoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZClcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICAgICBxdWFudGl0eTogY2FydFByb2R1Y3QucXVhbnRpdHkgKyBxdWFudGl0eSxcclxuICAgICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xyXG4gICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG5cclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHsgLi4ucHJvZHVjdCB9XSk7XHJcbiAgICB9XHJcbiAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY1F0eSA9ICgpID0+IHtcclxuICAgIHNldFF0eSgocHJldlF0eSkgPT4gcHJldlF0eSArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlY1F0eSA9ICgpID0+IHtcclxuICAgIHNldFF0eSgocHJldlF0eSkgPT4ge1xyXG4gICAgICBpZiAocHJldlF0eSAtIDEgPCAxKSByZXR1cm4gMTtcclxuXHJcbiAgICAgIHJldHVybiBwcmV2UXR5IC0gMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHNob3dDYXJ0LFxyXG4gICAgICAgIGNhcnRJdGVtcyxcclxuICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgIHRvdGFsUXVhbnRpdGllcyxcclxuICAgICAgICBxdHksXHJcbiAgICAgICAgaW5jUXR5LFxyXG4gICAgICAgIGRlY1F0eSxcclxuICAgICAgICBvbkFkZFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJQcm9kdWN0IiwiQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidG90YWxRdWFudGl0aWVzIiwic2V0VG90YWxRdWFudGl0aWVzIiwicXR5Iiwic2V0UXR5Iiwib25BZGQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsInByZXZUb3RhbFByaWNlIiwicHJpY2UiLCJwcmV2VG90YWxRdWFudGl0aWVzIiwidXBkYXRlZENhcnRJdGVtcyIsIm1hcCIsImNhcnRQcm9kdWN0Iiwic3VjY2VzcyIsIm5hbWUiLCJpbmNRdHkiLCJwcmV2UXR5IiwiZGVjUXR5IiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});