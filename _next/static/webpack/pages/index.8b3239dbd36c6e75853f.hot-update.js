webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default, getPoolData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPoolData\", function() { return getPoolData; });\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/intro */ \"./components/intro.tsx\");\n/* harmony import */ var _components_stake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stake */ \"./components/stake.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-async */ \"./node_modules/react-async/dist-web/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/racex-cardano/racexpool.github.io/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var allPosts = _ref.allPosts;\n  var heroPost = allPosts.hero;\n  var morePosts = allPosts.stories;\n\n  var _useAsync = Object(react_async__WEBPACK_IMPORTED_MODULE_10__[\"useAsync\"])({\n    promiseFn: getPoolData\n  }),\n      data = _useAsync.data,\n      error = _useAsync.error,\n      isLoading = _useAsync.isLoading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"RaceX - Cardano ADA Stake Pool\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_intro__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_stake__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              children: \"Loading...\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this) : data\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), heroPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_hero_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: heroPost.title,\n          coverImage: heroPost.coverImage,\n          date: heroPost.date,\n          author: heroPost.author,\n          slug: heroPost.slug,\n          excerpt: heroPost.excerpt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), morePosts.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_more_stories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          posts: morePosts\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 36\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"xdv6mW+FJn/9l/oYAM4jNjrm7OY=\", false, function () {\n  return [react_async__WEBPACK_IMPORTED_MODULE_10__[\"useAsync\"]];\n});\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nfunction getPoolData() {\n  return _getPoolData.apply(this, arguments);\n}\n\nfunction _getPoolData() {\n  _getPoolData = Object(_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var url, response;\n    return _Users_francisluz_Documents_Projects_racex_cardano_racexpool_github_io_src_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = \"https://js.adapools.org/pools/dfacb4313176b700e8ce0ba88732a5d7583746ccfaf582bd12095fde/summary.json\";\n            _context.next = 3;\n            return fetch(url).then(function (res) {\n              return res.ok ? res : Promise.reject(res);\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 3:\n            response = _context.sent;\n            console.log(response);\n            return _context.abrupt(\"return\", {\n              response: response\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getPoolData.apply(this, arguments);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwiaGVybyIsIm1vcmVQb3N0cyIsInN0b3JpZXMiLCJ1c2VBc3luYyIsInByb21pc2VGbiIsImdldFBvb2xEYXRhIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsInNsdWciLCJleGNlcnB0IiwibGVuZ3RoIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJQcm9taXNlIiwicmVqZWN0IiwianNvbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQWNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUNyQyxNQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsSUFBMUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdILFFBQVEsQ0FBQ0ksT0FBM0I7O0FBRnFDLGtCQUdGQyw2REFBUSxDQUFDO0FBQUVDLGFBQVMsRUFBRUM7QUFBYixHQUFELENBSE47QUFBQSxNQUc3QkMsSUFINkIsYUFHN0JBLElBSDZCO0FBQUEsTUFHdkJDLEtBSHVCLGFBR3ZCQSxLQUh1QjtBQUFBLE1BR2hCQyxTQUhnQixhQUdoQkEsU0FIZ0I7O0FBS3JDLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsNkRBQUQ7QUFBQSxnQ0FDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsaUNBQ0U7QUFBQSxzQkFDSUEsU0FBUyxnQkFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUyxHQUdURjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBWUdQLFFBQVEsaUJBQ1AscUVBQUMsNkRBQUQ7QUFDRSxlQUFLLEVBQUVBLFFBQVEsQ0FBQ1UsS0FEbEI7QUFFRSxvQkFBVSxFQUFFVixRQUFRLENBQUNXLFVBRnZCO0FBR0UsY0FBSSxFQUFFWCxRQUFRLENBQUNZLElBSGpCO0FBSUUsZ0JBQU0sRUFBRVosUUFBUSxDQUFDYSxNQUpuQjtBQUtFLGNBQUksRUFBRWIsUUFBUSxDQUFDYyxJQUxqQjtBQU1FLGlCQUFPLEVBQUVkLFFBQVEsQ0FBQ2U7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSixFQXNCR2IsU0FBUyxDQUFDYyxNQUFWLEdBQW1CLENBQW5CLGlCQUF3QixxRUFBQyxnRUFBRDtBQUFhLGVBQUssRUFBRWQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUNELENBdENEOztHQUFNSixLO1VBRytCTSxxRDs7O0tBSC9CTixLOztBQXdDU0Esb0VBQWY7QUFrQk8sU0FBZVEsV0FBdEI7QUFBQTtBQUFBOzs7Z1hBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NXLGVBREQsR0FDTyxxR0FEUDtBQUFBO0FBQUEsbUJBRWtCQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNwQkUsSUFEb0IsQ0FDZixVQUFBQyxHQUFHO0FBQUEscUJBQUtBLEdBQUcsQ0FBQ0MsRUFBSixHQUFTRCxHQUFULEdBQWVFLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSCxHQUFmLENBQXBCO0FBQUEsYUFEWSxFQUVwQkQsSUFGb0IsQ0FFZixVQUFBQyxHQUFHO0FBQUEscUJBQUlBLEdBQUcsQ0FBQ0ksSUFBSixFQUFKO0FBQUEsYUFGWSxDQUZsQjs7QUFBQTtBQUVDQyxvQkFGRDtBQU1MQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFOSyw2Q0FRRTtBQUNMQSxzQkFBUSxFQUFSQTtBQURLLGFBUkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMnXG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLXBvc3QnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbmltcG9ydCBTdGFrZSBmcm9tICcuLi9jb21wb25lbnRzL3N0YWtlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCBQb3N0IGZyb20gJy4uL3R5cGVzL3Bvc3QnXG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LWFzeW5jJ1xuaW1wb3J0IHsgcmVwb3J0IH0gZnJvbSAncHJvY2VzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IHtcbiAgICBoZXJvOiBQb3N0XG4gICAgc3RvcmllczogUG9zdFtdXG4gIH1cbiAgcG9vbERhdGE6IHtcbiAgICBkYXRhOiBhbnlcbiAgICBmYWxsYmFjazogYm9vbGVhblxuICB9XG59XG5cbmNvbnN0IEluZGV4ID0gKHsgYWxsUG9zdHMgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0cy5oZXJvXG4gIGNvbnN0IG1vcmVQb3N0cyA9IGFsbFBvc3RzLnN0b3JpZXNcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VBc3luYyh7IHByb21pc2VGbjogZ2V0UG9vbERhdGEgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UmFjZVggLSBDYXJkYW5vIEFEQSBTdGFrZSBQb29sPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIDxTdGFrZSAvPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHsgaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICB7aGVyb1Bvc3QgJiYgKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtoZXJvUG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0UG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICAgICdoZXJvJyxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvb2xEYXRhKCkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vanMuYWRhcG9vbHMub3JnL3Bvb2xzL2RmYWNiNDMxMzE3NmI3MDBlOGNlMGJhODg3MzJhNWQ3NTgzNzQ2Y2NmYWY1ODJiZDEyMDk1ZmRlL3N1bW1hcnkuanNvblwiXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlcyA9PiAocmVzLm9rID8gcmVzIDogUHJvbWlzZS5yZWplY3QocmVzKSkpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgcmV0dXJuIHtcbiAgICByZXNwb25zZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})