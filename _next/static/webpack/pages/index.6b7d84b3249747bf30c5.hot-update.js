webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pool.tsx":
/*!*****************************!*\
  !*** ./components/pool.tsx ***!
  \*****************************/
/*! exports provided: default, getPoolData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPoolData\", function() { return getPoolData; });\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-async */ \"./node_modules/react-async/dist-web/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/racex-cardano/racexpool.github.io/src/components/pool.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Pool = function Pool() {\n  _s();\n\n  var _useAsync = Object(react_async__WEBPACK_IMPORTED_MODULE_3__[\"useAsync\"])({\n    promiseFn: getPoolData\n  }),\n      data = _useAsync.data,\n      error = _useAsync.error,\n      isLoading = _useAsync.isLoading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n        className: \"mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight\",\n        children: \"Pool Performance\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this), isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            className: \"text-2xl\",\n            children: \"Pool ID\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"small\", {\n            children: data === null || data === void 0 ? void 0 : data.response.data.pool_id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n            className: \"mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight\",\n            children: [data === null || data === void 0 ? void 0 : data.response.data.roa_lifetime, \"%\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"text-1\",\n              children: \" ROA (Return of ADA)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: [\"Delegators: \", data === null || data === void 0 ? void 0 : data.response.data.delegators]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-5\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: [\"Active Stake: \", ((data === null || data === void 0 ? void 0 : data.response.data.active_stake) / 1000000000000).toFixed(2), \"M\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: [\"Live Stake: \", ((data === null || data === void 0 ? void 0 : data.response.data.total_stake) / 1000000000000).toFixed(2), \"M\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: [\"Pledge: \", ((data === null || data === void 0 ? void 0 : data.response.data.pledge) / 1000000000).toFixed(1), \"k\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-5\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: [\"Blocks in Epoch: \", data === null || data === void 0 ? void 0 : data.response.data.blocks_epoch]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: [\"Blocks Lifetime: \", parseInt(data === null || data === void 0 ? void 0 : data.response.data.blocks_epoch) + parseInt(data === null || data === void 0 ? void 0 : data.response.data.blocks_lifetime)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: [\"Costs: \", ((data === null || data === void 0 ? void 0 : data.response.data.tax_ratio) * 100).toFixed(2), \"% + \", (data === null || data === void 0 ? void 0 : data.response.data.tax_fix) / 1000000]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n            className: \"\",\n            href: \"https://adapools.org/pool/dfacb4313176b700e8ce0ba88732a5d7583746ccfaf582bd12095fde\",\n            children: \"ADApools.org\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n            href: \"https://pooltool.io/pool/dfacb4313176b700e8ce0ba88732a5d7583746ccfaf582bd12095fde\",\n            children: \"Pooltool.io\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Pool, \"xdv6mW+FJn/9l/oYAM4jNjrm7OY=\", false, function () {\n  return [react_async__WEBPACK_IMPORTED_MODULE_3__[\"useAsync\"]];\n});\n\n_c = Pool;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pool);\nfunction getPoolData() {\n  return _getPoolData.apply(this, arguments);\n} // var a = [\n//   (data.data.active_stake/1000000000000).toFixed(2)+'M',\n//   data.data.blocks_epoch,\n//   (data.data.total_stake/1000000000000).toFixed(2)+'M',\n//   (parseInt(data.data.blocks_epoch)+parseInt(data.data.blocks_lifetime)),\n//   (data.data.pledge/1000000000).toFixed(1)+'k',\n//   (data.data.tax_ratio*100).toFixed(2)+'% + ' + (data.data.tax_fix/1000000)\n// ];\n\nfunction _getPoolData() {\n  _getPoolData = Object(_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var url, response;\n    return _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = \"https://js.adapools.org/pools/dfacb4313176b700e8ce0ba88732a5d7583746ccfaf582bd12095fde/summary.json\";\n            _context.next = 3;\n            return fetch(url).then(function (res) {\n              return res.ok ? res : Promise.reject(res);\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 3:\n            response = _context.sent;\n            console.log(response);\n            return _context.abrupt(\"return\", {\n              response: response\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getPoolData.apply(this, arguments);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Pool\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb29sLnRzeD8wNTU0Il0sIm5hbWVzIjpbIlBvb2wiLCJ1c2VBc3luYyIsInByb21pc2VGbiIsImdldFBvb2xEYXRhIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicmVzcG9uc2UiLCJwb29sX2lkIiwicm9hX2xpZmV0aW1lIiwiZGVsZWdhdG9ycyIsImFjdGl2ZV9zdGFrZSIsInRvRml4ZWQiLCJ0b3RhbF9zdGFrZSIsInBsZWRnZSIsImJsb2Nrc19lcG9jaCIsInBhcnNlSW50IiwiYmxvY2tzX2xpZmV0aW1lIiwidGF4X3JhdGlvIiwidGF4X2ZpeCIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwiUHJvbWlzZSIsInJlamVjdCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLDREQUFRLENBQUM7QUFBRUMsYUFBUyxFQUFFQztBQUFiLEdBQUQsQ0FEMUI7QUFBQSxNQUNUQyxJQURTLGFBQ1RBLElBRFM7QUFBQSxNQUNIQyxLQURHLGFBQ0hBLEtBREc7QUFBQSxNQUNJQyxTQURKLGFBQ0lBLFNBREo7O0FBR2pCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlJQSxTQUFTLGdCQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFMsZ0JBR1Q7QUFBQSxnQ0FDQTtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBUUYsSUFBUixhQUFRQSxJQUFSLHVCQUFRQSxJQUFJLENBQUVHLFFBQU4sQ0FBZUgsSUFBZixDQUFvQkk7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUkscUJBQVMsRUFBQyxvRUFBZDtBQUFBLHVCQUNHSixJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUcsUUFBTixDQUFlSCxJQUFmLENBQW9CSyxZQUR2QixvQkFFRTtBQUFNLHVCQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBT0U7QUFBQSx1Q0FBZ0JMLElBQWhCLGFBQWdCQSxJQUFoQix1QkFBZ0JBLElBQUksQ0FBRUcsUUFBTixDQUFlSCxJQUFmLENBQW9CTSxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBVUE7QUFBSyxtQkFBUyxFQUFDLDZEQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRTtBQUFBLDJDQUFrQixDQUFDLENBQUFOLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxRQUFOLENBQWVILElBQWYsQ0FBb0JPLFlBQXBCLElBQWlDLGFBQWxDLEVBQWlEQyxPQUFqRCxDQUF5RCxDQUF6RCxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHlDQUFnQixDQUFDLENBQUFSLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxRQUFOLENBQWVILElBQWYsQ0FBb0JTLFdBQXBCLElBQWdDLGFBQWpDLEVBQWdERCxPQUFoRCxDQUF3RCxDQUF4RCxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLHFDQUFZLENBQUMsQ0FBQVIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLFFBQU4sQ0FBZUgsSUFBZixDQUFvQlUsTUFBcEIsSUFBMkIsVUFBNUIsRUFBd0NGLE9BQXhDLENBQWdELENBQWhELENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBQSw4Q0FBcUJSLElBQXJCLGFBQXFCQSxJQUFyQix1QkFBcUJBLElBQUksQ0FBRUcsUUFBTixDQUFlSCxJQUFmLENBQW9CVyxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLDhDQUFxQkMsUUFBUSxDQUFDWixJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRUcsUUFBTixDQUFlSCxJQUFmLENBQW9CVyxZQUFyQixDQUFSLEdBQTZDQyxRQUFRLENBQUNaLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFRyxRQUFOLENBQWVILElBQWYsQ0FBb0JhLGVBQXJCLENBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUEsb0NBQVcsQ0FBQyxDQUFBYixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsUUFBTixDQUFlSCxJQUFmLENBQW9CYyxTQUFwQixJQUE4QixHQUEvQixFQUFvQ04sT0FBcEMsQ0FBNEMsQ0FBNUMsQ0FBWCxVQUErRCxDQUFBUixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsUUFBTixDQUFlSCxJQUFmLENBQW9CZSxPQUFwQixJQUE0QixPQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWQSxlQXNCQTtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQyxFQUFiO0FBQWdCLGdCQUFJLEVBQUMsb0ZBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxnQkFBSSxFQUFDLG1GQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkE7QUFBQSxzQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0EzQ0Q7O0dBQU1uQixJO1VBQytCQyxvRDs7O0tBRC9CRCxJO0FBNkNTQSxtRUFBZjtBQUdPLFNBQWVHLFdBQXRCO0FBQUE7QUFBQSxDLENBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2dYQXBCTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ2lCLGVBREQsR0FDTyxxR0FEUDtBQUFBO0FBQUEsbUJBRWtCQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNwQkUsSUFEb0IsQ0FDZixVQUFBQyxHQUFHO0FBQUEscUJBQUtBLEdBQUcsQ0FBQ0MsRUFBSixHQUFTRCxHQUFULEdBQWVFLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSCxHQUFmLENBQXBCO0FBQUEsYUFEWSxFQUVwQkQsSUFGb0IsQ0FFZixVQUFBQyxHQUFHO0FBQUEscUJBQUlBLEdBQUcsQ0FBQ0ksSUFBSixFQUFKO0FBQUEsYUFGWSxDQUZsQjs7QUFBQTtBQUVDcEIsb0JBRkQ7QUFNTHFCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWXRCLFFBQVo7QUFOSyw2Q0FRRTtBQUNMQSxzQkFBUSxFQUFSQTtBQURLLGFBUkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9vbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LWFzeW5jJ1xuXG5jb25zdCBQb29sID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUFzeW5jKHsgcHJvbWlzZUZuOiBnZXRQb29sRGF0YSB9KVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgUG9vbCBQZXJmb3JtYW5jZVxuICAgICAgICA8L2gyPlxuICAgICAgICB7IGlzTG9hZGluZyA/IChcbiAgICAgICAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlBvb2wgSUQ8L2g0PlxuICAgICAgICAgICAgPHNtYWxsPntkYXRhPy5yZXNwb25zZS5kYXRhLnBvb2xfaWR9PC9zbWFsbD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi04IHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAge2RhdGE/LnJlc3BvbnNlLmRhdGEucm9hX2xpZmV0aW1lfSVcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0xXCI+IFJPQSAoUmV0dXJuIG9mIEFEQSk8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHA+RGVsZWdhdG9yczoge2RhdGE/LnJlc3BvbnNlLmRhdGEuZGVsZWdhdG9yc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIG1kOmNvbC1nYXAtMTYgbGc6Y29sLWdhcC0zMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxwPkFjdGl2ZSBTdGFrZTogeyhkYXRhPy5yZXNwb25zZS5kYXRhLmFjdGl2ZV9zdGFrZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpfU08L3A+XG4gICAgICAgICAgICAgIDxwPkxpdmUgU3Rha2U6IHsoZGF0YT8ucmVzcG9uc2UuZGF0YS50b3RhbF9zdGFrZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpfU08L3A+XG4gICAgICAgICAgICAgIDxwPlBsZWRnZTogeyhkYXRhPy5yZXNwb25zZS5kYXRhLnBsZWRnZS8xMDAwMDAwMDAwKS50b0ZpeGVkKDEpfWs8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8cD5CbG9ja3MgaW4gRXBvY2g6IHtkYXRhPy5yZXNwb25zZS5kYXRhLmJsb2Nrc19lcG9jaH08L3A+XG4gICAgICAgICAgICAgIDxwPkJsb2NrcyBMaWZldGltZToge3BhcnNlSW50KGRhdGE/LnJlc3BvbnNlLmRhdGEuYmxvY2tzX2Vwb2NoKSArIHBhcnNlSW50KGRhdGE/LnJlc3BvbnNlLmRhdGEuYmxvY2tzX2xpZmV0aW1lKX08L3A+XG4gICAgICAgICAgICAgIDxwPkNvc3RzOiB7KGRhdGE/LnJlc3BvbnNlLmRhdGEudGF4X3JhdGlvKjEwMCkudG9GaXhlZCgyKX0lICsge2RhdGE/LnJlc3BvbnNlLmRhdGEudGF4X2ZpeC8xMDAwMDAwfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBocmVmPVwiaHR0cHM6Ly9hZGFwb29scy5vcmcvcG9vbC9kZmFjYjQzMTMxNzZiNzAwZThjZTBiYTg4NzMyYTVkNzU4Mzc0NmNjZmFmNTgyYmQxMjA5NWZkZVwiPkFEQXBvb2xzLm9yZzwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Bvb2x0b29sLmlvL3Bvb2wvZGZhY2I0MzEzMTc2YjcwMGU4Y2UwYmE4ODczMmE1ZDc1ODM3NDZjY2ZhZjU4MmJkMTIwOTVmZGVcIj5Qb29sdG9vbC5pbzwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb29sXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvb2xEYXRhKCkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vanMuYWRhcG9vbHMub3JnL3Bvb2xzL2RmYWNiNDMxMzE3NmI3MDBlOGNlMGJhODg3MzJhNWQ3NTgzNzQ2Y2NmYWY1ODJiZDEyMDk1ZmRlL3N1bW1hcnkuanNvblwiXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlcyA9PiAocmVzLm9rID8gcmVzIDogUHJvbWlzZS5yZWplY3QocmVzKSkpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgcmV0dXJuIHtcbiAgICByZXNwb25zZVxuICB9XG59XG5cbi8vIHZhciBhID0gW1xuLy8gICAoZGF0YS5kYXRhLmFjdGl2ZV9zdGFrZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpKydNJyxcbi8vICAgZGF0YS5kYXRhLmJsb2Nrc19lcG9jaCxcbi8vICAgKGRhdGEuZGF0YS50b3RhbF9zdGFrZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpKydNJyxcbi8vICAgKHBhcnNlSW50KGRhdGEuZGF0YS5ibG9ja3NfZXBvY2gpK3BhcnNlSW50KGRhdGEuZGF0YS5ibG9ja3NfbGlmZXRpbWUpKSxcbi8vICAgKGRhdGEuZGF0YS5wbGVkZ2UvMTAwMDAwMDAwMCkudG9GaXhlZCgxKSsnaycsXG4vLyAgIChkYXRhLmRhdGEudGF4X3JhdGlvKjEwMCkudG9GaXhlZCgyKSsnJSArICcgKyAoZGF0YS5kYXRhLnRheF9maXgvMTAwMDAwMClcbi8vIF07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pool.tsx\n");

/***/ })

})