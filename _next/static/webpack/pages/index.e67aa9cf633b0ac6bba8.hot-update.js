webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default, getPoolData, numberFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPoolData\", function() { return getPoolData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numberFormatter\", function() { return numberFormatter; });\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/intro */ \"./components/intro.tsx\");\n/* harmony import */ var _components_stake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stake */ \"./components/stake.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-async */ \"./node_modules/react-async/dist-web/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/racex-cardano/racexpool.github.io/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var allPosts = _ref.allPosts;\n  var heroPost = allPosts.hero;\n  var morePosts = allPosts.stories;\n\n  var _useAsync = Object(react_async__WEBPACK_IMPORTED_MODULE_10__[\"useAsync\"])({\n    promiseFn: getPoolData\n  }),\n      data = _useAsync.data,\n      error = _useAsync.error,\n      isLoading = _useAsync.isLoading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"RaceX - Cardano ADA Stake Pool\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_intro__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_stake__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              children: \"Loading...\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"ROA: \", data === null || data === void 0 ? void 0 : data.response.data.roa_lifetime, \"%\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Pool ID: \", data === null || data === void 0 ? void 0 : data.response.data.pool_id]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Delegators: \", data === null || data === void 0 ? void 0 : data.response.data.delegators]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Pledge: \", ((data === null || data === void 0 ? void 0 : data.response.data.pledge) / 1000000000).toFixed(1), \"k\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Active Stake: \", ((data === null || data === void 0 ? void 0 : data.response.data.active_stake) / 1000000000000).toFixed(2), \"M\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Live Stake: \", ((data === null || data === void 0 ? void 0 : data.response.data.total_stake) / 1000000000000).toFixed(2), \"M\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Blocks in Epoch: \", data === null || data === void 0 ? void 0 : data.response.data.blocks_epoch]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Blocks Lifetime: \", parseInt(data === null || data === void 0 ? void 0 : data.response.data.blocks_epoch) + parseInt(data === null || data === void 0 ? void 0 : data.response.data.blocks_lifetime)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"Costs: \", ((data === null || data === void 0 ? void 0 : data.response.data.tax_ratio) * 100).toFixed(2), \"% + \", (data === null || data === void 0 ? void 0 : data.response.data.tax_fix) / 1000000]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), heroPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_hero_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: heroPost.title,\n          coverImage: heroPost.coverImage,\n          date: heroPost.date,\n          author: heroPost.author,\n          slug: heroPost.slug,\n          excerpt: heroPost.excerpt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this), morePosts.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_more_stories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          posts: morePosts\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 36\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"xdv6mW+FJn/9l/oYAM4jNjrm7OY=\", false, function () {\n  return [react_async__WEBPACK_IMPORTED_MODULE_10__[\"useAsync\"]];\n});\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nfunction getPoolData() {\n  return _getPoolData.apply(this, arguments);\n}\n\nfunction _getPoolData() {\n  _getPoolData = Object(_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var url, response;\n    return _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = \"https://js.adapools.org/pools/dfacb4313176b700e8ce0ba88732a5d7583746ccfaf582bd12095fde/summary.json\";\n            _context.next = 3;\n            return fetch(url).then(function (res) {\n              return res.ok ? res : Promise.reject(res);\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 3:\n            response = _context.sent;\n            console.log(response);\n            return _context.abrupt(\"return\", {\n              response: response\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getPoolData.apply(this, arguments);\n}\n\nfunction numberFormatter(num) {\n  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);\n} // var a = [\n//   (data.data.active_stake/1000000000000).toFixed(2)+'M',\n//   data.data.blocks_epoch,\n//   (data.data.total_stake/1000000000000).toFixed(2)+'M',\n//   (parseInt(data.data.blocks_epoch)+parseInt(data.data.blocks_lifetime)),\n//   (data.data.pledge/1000000000).toFixed(1)+'k',\n//   (data.data.tax_ratio*100).toFixed(2)+'% + ' + (data.data.tax_fix/1000000)\n// ];\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwiaGVybyIsIm1vcmVQb3N0cyIsInN0b3JpZXMiLCJ1c2VBc3luYyIsInByb21pc2VGbiIsImdldFBvb2xEYXRhIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicmVzcG9uc2UiLCJyb2FfbGlmZXRpbWUiLCJwb29sX2lkIiwiZGVsZWdhdG9ycyIsInBsZWRnZSIsInRvRml4ZWQiLCJhY3RpdmVfc3Rha2UiLCJ0b3RhbF9zdGFrZSIsImJsb2Nrc19lcG9jaCIsInBhcnNlSW50IiwiYmxvY2tzX2xpZmV0aW1lIiwidGF4X3JhdGlvIiwidGF4X2ZpeCIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJzbHVnIiwiZXhjZXJwdCIsImxlbmd0aCIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwiUHJvbWlzZSIsInJlamVjdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibnVtYmVyRm9ybWF0dGVyIiwibnVtIiwiTWF0aCIsImFicyIsInNpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBY0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQ3JDLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDRSxJQUExQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDSSxPQUEzQjs7QUFGcUMsa0JBR0ZDLDZEQUFRLENBQUM7QUFBRUMsYUFBUyxFQUFFQztBQUFiLEdBQUQsQ0FITjtBQUFBLE1BRzdCQyxJQUg2QixhQUc3QkEsSUFINkI7QUFBQSxNQUd2QkMsS0FIdUIsYUFHdkJBLEtBSHVCO0FBQUEs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b0JBRkQ7QUFNTDRCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTdCLFFBQVo7QUFOSyw2Q0FRRTtBQUNMQSxzQkFBUSxFQUFSQTtBQURLLGFBUkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWFBLFNBQVM4QixlQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUNuQyxTQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxJQUFnQixHQUFoQixHQUFzQkMsSUFBSSxDQUFDRSxJQUFMLENBQVVILEdBQVYsSUFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBYyxJQUFmLEVBQXFCMUIsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBbEIsR0FBcUQsR0FBM0UsR0FBaUYyQixJQUFJLENBQUNFLElBQUwsQ0FBVUgsR0FBVixJQUFlQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxDQUF2RztBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IFN0YWtlIGZyb20gJy4uL2NvbXBvbmVudHMvc3Rha2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuLi9saWIvYXBpJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vdHlwZXMvcG9zdCdcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtYXN5bmMnXG5pbXBvcnQgeyByZXBvcnQgfSBmcm9tICdwcm9jZXNzJ1xuXG50eXBlIFByb3BzID0ge1xuICBhbGxQb3N0czoge1xuICAgIGhlcm86IFBvc3RcbiAgICBzdG9yaWVzOiBQb3N0W11cbiAgfVxuICBwb29sRGF0YToge1xuICAgIGRhdGE6IGFueVxuICAgIGZhbGxiYWNrOiBib29sZWFuXG4gIH1cbn1cblxuY29uc3QgSW5kZXggPSAoeyBhbGxQb3N0cyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBoZXJvUG9zdCA9IGFsbFBvc3RzLmhlcm9cbiAgY29uc3QgbW9yZVBvc3RzID0gYWxsUG9zdHMuc3Rvcmllc1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUFzeW5jKHsgcHJvbWlzZUZuOiBnZXRQb29sRGF0YSB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5SYWNlWCAtIENhcmRhbm8gQURBIFN0YWtlIFBvb2w8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgICAgPFN0YWtlIC8+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7IGlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8cD5ST0E6IHtkYXRhPy5yZXNwb25zZS5kYXRhLnJvYV9saWZldGltZX0lPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+UG9vbCBJRDoge2RhdGE/LnJlc3BvbnNlLmRhdGEucG9vbF9pZH08L3A+XG4gICAgICAgICAgICAgICAgICA8cD5EZWxlZ2F0b3JzOiB7ZGF0YT8ucmVzcG9uc2UuZGF0YS5kZWxlZ2F0b3JzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlBsZWRnZTogeyhkYXRhPy5yZXNwb25zZS5kYXRhLnBsZWRnZS8xMDAwMDAwMDAwKS50b0ZpeGVkKDEpfWs8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5BY3RpdmUgU3Rha2U6IHsoZGF0YT8ucmVzcG9uc2UuZGF0YS5hY3RpdmVfc3Rha2UvMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKX1NPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+TGl2ZSBTdGFrZTogeyhkYXRhPy5yZXNwb25zZS5kYXRhLnRvdGFsX3N0YWtlLzEwMDAwMDAwMDAwMDApLnRvRml4ZWQoMil9TTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkJsb2NrcyBpbiBFcG9jaDoge2RhdGE/LnJlc3BvbnNlLmRhdGEuYmxvY2tzX2Vwb2NofTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkJsb2NrcyBMaWZldGltZToge3BhcnNlSW50KGRhdGE/LnJlc3BvbnNlLmRhdGEuYmxvY2tzX2Vwb2NoKSArIHBhcnNlSW50KGRhdGE/LnJlc3BvbnNlLmRhdGEuYmxvY2tzX2xpZmV0aW1lKX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Db3N0czogeyhkYXRhPy5yZXNwb25zZS5kYXRhLnRheF9yYXRpbyoxMDApLnRvRml4ZWQoMil9JSArIHtkYXRhPy5yZXNwb25zZS5kYXRhLnRheF9maXgvMTAwMDAwMH08L3A+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICAgIDxIZXJvUG9zdFxuICAgICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e2hlcm9Qb3N0LmRhdGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICAgICdleGNlcnB0JyxcbiAgICAnaGVybycsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb29sRGF0YSgpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2pzLmFkYXBvb2xzLm9yZy9wb29scy9kZmFjYjQzMTMxNzZiNzAwZThjZTBiYTg4NzMyYTVkNzU4Mzc0NmNjZmFmNTgyYmQxMjA5NWZkZS9zdW1tYXJ5Lmpzb25cIlxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICAudGhlbihyZXMgPT4gKHJlcy5vayA/IHJlcyA6IFByb21pc2UucmVqZWN0KHJlcykpKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzcG9uc2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRm9ybWF0dGVyKG51bSkge1xuICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OSA/IE1hdGguc2lnbihudW0pICogKChNYXRoLmFicyhudW0pLzEwMDApLnRvRml4ZWQoMSkpICsgJ2snIDogTWF0aC5zaWduKG51bSkqTWF0aC5hYnMobnVtKVxufVxuXG4vLyB2YXIgYSA9IFtcbi8vICAgKGRhdGEuZGF0YS5hY3RpdmVfc3Rha2UvMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSsnTScsXG4vLyAgIGRhdGEuZGF0YS5ibG9ja3NfZXBvY2gsXG4vLyAgIChkYXRhLmRhdGEudG90YWxfc3Rha2UvMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSsnTScsXG4vLyAgIChwYXJzZUludChkYXRhLmRhdGEuYmxvY2tzX2Vwb2NoKStwYXJzZUludChkYXRhLmRhdGEuYmxvY2tzX2xpZmV0aW1lKSksXG4vLyAgIChkYXRhLmRhdGEucGxlZGdlLzEwMDAwMDAwMDApLnRvRml4ZWQoMSkrJ2snLFxuLy8gICAoZGF0YS5kYXRhLnRheF9yYXRpbyoxMDApLnRvRml4ZWQoMikrJyUgKyAnICsgKGRhdGEuZGF0YS50YXhfZml4LzEwMDAwMDApXG4vLyBdOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})