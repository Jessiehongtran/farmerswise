webpackHotUpdate_N_E("pages/page",{

/***/ "./pages/page.js":
/*!***********************!*\
  !*** ./pages/page.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"./pages/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jessie/Documents/GitHub/farmerswise/pages/page.js\",\n    _this = undefined;\n\n\n\n\nvar Page = function Page(_ref) {\n  var plants = _ref.plants;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n    children: plants.map(function (plant) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: plant.image,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 30\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Page;\n\nPage.getInitialProps = function () {\n  return {\n    plants: [{\n      name: \"Kale\",\n      image: \"https://specialtyproduce.com/sppics/7631.png\"\n    }, {\n      name: \"Tomato\",\n      image: \"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg\"\n    }, {\n      name: \"Green bean\",\n      image: \"https://www.thespruce.com/thmb/H6rcvzKXl0lWGiCfRydTUxRMJUI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-green-beans-1403459-hero-530fc7f267ce44cf89415748b46d88b4.jpg\"\n    }, {\n      name: \"Green bean\",\n      image: \"https://www.thespruce.com/thmb/H6rcvzKXl0lWGiCfRydTUxRMJUI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-green-beans-1403459-hero-530fc7f267ce44cf89415748b46d88b4.jpg\"\n    }, {\n      name: \"Okra\",\n      image: \"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/articles/2018/02/growingokra-1000-1519306309.jpg\"\n    }, {\n      name: \"Red Okra\",\n      image: \"https://cdn.shopify.com/s/files/1/2550/8730/products/Okra_Red-Burgundy_on-plant-w-blossom_logo.progressive.jpg?v=1578326424\"\n    }, {\n      name: \"Romain Lettuce\",\n      image: \"https://www.gardeningknowhow.com/wp-content/uploads/2019/12/romaine.jpg\"\n    }, {\n      name: \"Potato\",\n      image: \"https://www.molbaks.com/wp-content/uploads/2020/04/banner-1-1200x565.jpg\"\n    }, {\n      name: \"Carrot\",\n      image: \"https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2015/11/carrot-companion-plants-2_mini.jpg\"\n    }, {\n      name: \"Cucumber\",\n      image: \"https://gardenerspath.com/wp-content/uploads/2017/04/grow-cucumber-FB.jpg\"\n    }, {\n      name: \"Brocoli\",\n      image: \"https://edge.bonnieplants.com/www/tiny/uploads/20200810204938/lieutenant-broccoli.jpg\"\n    }, {\n      name: \"Black berry\",\n      image: \"https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/blueberries_full_width.jpg\"\n    }]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZS5qcz85M2RjIl0sIm5hbWVzIjpbIlBhZ2UiLCJwbGFudHMiLCJzdHlsZSIsIm1haW4iLCJtYXAiLCJwbGFudCIsImltYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLHNCQUNUO0FBQUssYUFBUyxFQUFFQyx3REFBSyxDQUFDQyxJQUF0QjtBQUFBLGNBQ0tGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSwwQkFBSTtBQUFLLGlCQUFTLEVBQUVILHdEQUFLLENBQUNJLEtBQXRCO0FBQUEsK0JBQ2pCO0FBQUssYUFBRyxFQUFFRCxLQUFLLENBQUNDLEtBQWhCO0FBQXVCLGFBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURTO0FBQUEsQ0FBYjs7S0FBTU4sSTs7QUFPTkEsSUFBSSxDQUFDTyxlQUFMLEdBQXVCLFlBQU07QUFDekIsU0FBTztBQUNITixVQUFNLEVBQUUsQ0FDSjtBQUNJTyxVQUFJLEVBQUUsTUFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQURJLEVBS0o7QUFDSUUsVUFBSSxFQUFFLFFBRFY7QUFFSUYsV0FBSyxFQUFFO0FBRlgsS0FMSSxFQVNKO0FBQ0lFLFVBQUksRUFBRSxZQURWO0FBRUlGLFdBQUssRUFBRTtBQUZYLEtBVEksRUFhSjtBQUNJRSxVQUFJLEVBQUUsWUFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQWJJLEVBaUJKO0FBQ0lFLFVBQUksRUFBRSxNQURWO0FBRUlGLFdBQUssRUFBRTtBQUZYLEtBakJJLEVBcUJKO0FBQ0lFLFVBQUksRUFBRSxVQURWO0FBRUlGLFdBQUssRUFBRTtBQUZYLEtBckJJLEVBeUJKO0FBQ0lFLFVBQUksRUFBRSxnQkFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQXpCSSxFQTZCSjtBQUNJRSxVQUFJLEVBQUUsUUFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQTdCSSxFQWlDSjtBQUNJRSxVQUFJLEVBQUUsUUFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQWpDSSxFQXFDSjtBQUNJRSxVQUFJLEVBQUUsVUFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQXJDSSxFQXlDSjtBQUNJRSxVQUFJLEVBQUUsU0FEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQXpDSSxFQTZDSjtBQUNJRSxVQUFJLEVBQUUsYUFEVjtBQUVJRixXQUFLLEVBQUU7QUFGWCxLQTdDSTtBQURMLEdBQVA7QUFvREgsQ0FyREQ7O0FBdURlTixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3BhZ2UubW9kdWxlLnNjc3MnXG5cbmNvbnN0IFBhZ2UgPSAoeyBwbGFudHMgfSkgPT4gXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW59PlxuICAgICAgICB7cGxhbnRzLm1hcChwbGFudCA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9ID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFudC5pbWFnZX0gYWx0PVwiXCIvPlxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvZGl2PlxuXG5QYWdlLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkthbGVcIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3NwZWNpYWx0eXByb2R1Y2UuY29tL3NwcGljcy83NjMxLnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVG9tYXRvXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYWxtYW5hYy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9pbWFnZV9ub2Rlcy90b21hdG9lc19oZWxpb3M0ZW9zX2dldHR5aW1hZ2VzLWVkaXQuanBlZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR3JlZW4gYmVhblwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LnRoZXNwcnVjZS5jb20vdGhtYi9INnJjdnpLWGwwbFdHaUNmUnlkVFV4Uk1KVUk9LzQ1MHgwL2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL2hvdy10by1ncm93LWdyZWVuLWJlYW5zLTE0MDM0NTktaGVyby01MzBmYzdmMjY3Y2U0NGNmODk0MTU3NDhiNDZkODhiNC5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdyZWVuIGJlYW5cIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy50aGVzcHJ1Y2UuY29tL3RobWIvSDZyY3Z6S1hsMGxXR2lDZlJ5ZFRVeFJNSlVJPS80NTB4MC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9ob3ctdG8tZ3Jvdy1ncmVlbi1iZWFucy0xNDAzNDU5LWhlcm8tNTMwZmM3ZjI2N2NlNDRjZjg5NDE1NzQ4YjQ2ZDg4YjQuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJPa3JhXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9oaXBzLmhlYXJzdGFwcHMuY29tL2htZy1wcm9kLnMzLmFtYXpvbmF3cy5jb20vaW1hZ2VzLzk4MS9hcnRpY2xlcy8yMDE4LzAyL2dyb3dpbmdva3JhLTEwMDAtMTUxOTMwNjMwOS5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlZCBPa3JhXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzI1NTAvODczMC9wcm9kdWN0cy9Pa3JhX1JlZC1CdXJndW5keV9vbi1wbGFudC13LWJsb3Nzb21fbG9nby5wcm9ncmVzc2l2ZS5qcGc/dj0xNTc4MzI2NDI0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJSb21haW4gTGV0dHVjZVwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmdhcmRlbmluZ2tub3dob3cuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3JvbWFpbmUuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3RhdG9cIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5tb2xiYWtzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9iYW5uZXItMS0xMjAweDU2NS5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNhcnJvdFwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vYmFsY29ueWdhcmRlbndlYi1saG5meDBiZW9tcXZuaHNweC5uZXRkbmEtc3NsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9jYXJyb3QtY29tcGFuaW9uLXBsYW50cy0yX21pbmkuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDdWN1bWJlclwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vZ2FyZGVuZXJzcGF0aC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDQvZ3Jvdy1jdWN1bWJlci1GQi5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJyb2NvbGlcIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2VkZ2UuYm9ubmllcGxhbnRzLmNvbS93d3cvdGlueS91cGxvYWRzLzIwMjAwODEwMjA0OTM4L2xpZXV0ZW5hbnQtYnJvY2NvbGkuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJCbGFjayBiZXJyeVwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmFsbWFuYWMuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvdXNlcnMvQWxtYW5hY1N0YWZmQXJjaGl2ZS9ibHVlYmVycmllc19mdWxsX3dpZHRoLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page.js\n");

/***/ })

})