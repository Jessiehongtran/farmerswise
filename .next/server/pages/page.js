module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/page.js":
/*!***********************!*\
  !*** ./pages/page.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"./pages/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jessie/Documents/GitHub/farmerswise/pages/page.js\";\n\n\n\nconst Page = ({\n  plants\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n  children: plants.map(plant => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: plant.image,\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name,\n      children: plant.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 30\n  }, undefined))\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 5\n}, undefined);\n\nPage.getInitialProps = () => {\n  return {\n    plants: [{\n      name: \"Kale\",\n      image: \"https://specialtyproduce.com/sppics/7631.png\"\n    }, {\n      name: \"Tomato\",\n      image: \"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg\"\n    }, {\n      name: \"Green bean\",\n      image: \"https://www.thespruce.com/thmb/H6rcvzKXl0lWGiCfRydTUxRMJUI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-green-beans-1403459-hero-530fc7f267ce44cf89415748b46d88b4.jpg\"\n    }, {\n      name: \"Green bean\",\n      image: \"https://www.thespruce.com/thmb/H6rcvzKXl0lWGiCfRydTUxRMJUI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-green-beans-1403459-hero-530fc7f267ce44cf89415748b46d88b4.jpg\"\n    }, {\n      name: \"Okra\",\n      image: \"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/articles/2018/02/growingokra-1000-1519306309.jpg\"\n    }, {\n      name: \"Red Okra\",\n      image: \"https://cdn.shopify.com/s/files/1/2550/8730/products/Okra_Red-Burgundy_on-plant-w-blossom_logo.progressive.jpg?v=1578326424\"\n    }, {\n      name: \"Romain Lettuce\",\n      image: \"https://www.gardeningknowhow.com/wp-content/uploads/2019/12/romaine.jpg\"\n    }, {\n      name: \"Potato\",\n      image: \"https://www.molbaks.com/wp-content/uploads/2020/04/banner-1-1200x565.jpg\"\n    }, {\n      name: \"Carrot\",\n      image: \"https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2015/11/carrot-companion-plants-2_mini.jpg\"\n    }, {\n      name: \"Cucumber\",\n      image: \"https://gardenerspath.com/wp-content/uploads/2017/04/grow-cucumber-FB.jpg\"\n    }, {\n      name: \"Brocoli\",\n      image: \"https://edge.bonnieplants.com/www/tiny/uploads/20200810204938/lieutenant-broccoli.jpg\"\n    }, {\n      name: \"Black berry\",\n      image: \"https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/blueberries_full_width.jpg\"\n    }]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLmpzPzkzZGMiXSwibmFtZXMiOlsiUGFnZSIsInBsYW50cyIsInN0eWxlIiwibWFpbiIsIm1hcCIsInBsYW50IiwiaW1hZ2UiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDVDtBQUFLLFdBQVMsRUFBRUMsd0RBQUssQ0FBQ0MsSUFBdEI7QUFBQSxZQUNLRixNQUFNLENBQUNHLEdBQVAsQ0FBV0MsS0FBSyxpQkFBSTtBQUFLLGFBQVMsRUFBRUgsd0RBQUssQ0FBQ0ksS0FBdEI7QUFBQSw0QkFDakI7QUFBSyxTQUFHLEVBQUVELEtBQUssQ0FBQ0MsS0FBaEI7QUFBdUIsU0FBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCLGVBRWpCO0FBQUcsZUFBUyxFQUFFSix3REFBSyxDQUFDSyxJQUFwQjtBQUFBLGdCQUEyQkYsS0FBSyxDQUFDRTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBUUFQLElBQUksQ0FBQ1EsZUFBTCxHQUF1QixNQUFNO0FBQ3pCLFNBQU87QUFDSFAsVUFBTSxFQUFFLENBQ0o7QUFDSU0sVUFBSSxFQUFFLE1BRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0FESSxFQUtKO0FBQ0lDLFVBQUksRUFBRSxRQURWO0FBRUlELFdBQUssRUFBRTtBQUZYLEtBTEksRUFTSjtBQUNJQyxVQUFJLEVBQUUsWUFEVjtBQUVJRCxXQUFLLEVBQUU7QUFGWCxLQVRJLEVBYUo7QUFDSUMsVUFBSSxFQUFFLFlBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0FiSSxFQWlCSjtBQUNJQyxVQUFJLEVBQUUsTUFEVjtBQUVJRCxXQUFLLEVBQUU7QUFGWCxLQWpCSSxFQXFCSjtBQUNJQyxVQUFJLEVBQUUsVUFEVjtBQUVJRCxXQUFLLEVBQUU7QUFGWCxLQXJCSSxFQXlCSjtBQUNJQyxVQUFJLEVBQUUsZ0JBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0F6QkksRUE2Qko7QUFDSUMsVUFBSSxFQUFFLFFBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0E3QkksRUFpQ0o7QUFDSUMsVUFBSSxFQUFFLFFBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0FqQ0ksRUFxQ0o7QUFDSUMsVUFBSSxFQUFFLFVBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0FyQ0ksRUF5Q0o7QUFDSUMsVUFBSSxFQUFFLFNBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0F6Q0ksRUE2Q0o7QUFDSUMsVUFBSSxFQUFFLGFBRFY7QUFFSUQsV0FBSyxFQUFFO0FBRlgsS0E3Q0k7QUFETCxHQUFQO0FBb0RILENBckREOztBQXVEZU4sbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9wYWdlLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQYWdlID0gKHsgcGxhbnRzIH0pID0+IFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWlufT5cbiAgICAgICAge3BsYW50cy5tYXAocGxhbnQgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltYWdlfSA+XG4gICAgICAgICAgICA8aW1nIHNyYz17cGxhbnQuaW1hZ2V9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUubmFtZX0+e3BsYW50Lm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvZGl2PlxuXG5QYWdlLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkthbGVcIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3NwZWNpYWx0eXByb2R1Y2UuY29tL3NwcGljcy83NjMxLnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVG9tYXRvXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYWxtYW5hYy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9pbWFnZV9ub2Rlcy90b21hdG9lc19oZWxpb3M0ZW9zX2dldHR5aW1hZ2VzLWVkaXQuanBlZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR3JlZW4gYmVhblwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LnRoZXNwcnVjZS5jb20vdGhtYi9INnJjdnpLWGwwbFdHaUNmUnlkVFV4Uk1KVUk9LzQ1MHgwL2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL2hvdy10by1ncm93LWdyZWVuLWJlYW5zLTE0MDM0NTktaGVyby01MzBmYzdmMjY3Y2U0NGNmODk0MTU3NDhiNDZkODhiNC5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdyZWVuIGJlYW5cIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy50aGVzcHJ1Y2UuY29tL3RobWIvSDZyY3Z6S1hsMGxXR2lDZlJ5ZFRVeFJNSlVJPS80NTB4MC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9ob3ctdG8tZ3Jvdy1ncmVlbi1iZWFucy0xNDAzNDU5LWhlcm8tNTMwZmM3ZjI2N2NlNDRjZjg5NDE1NzQ4YjQ2ZDg4YjQuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJPa3JhXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9oaXBzLmhlYXJzdGFwcHMuY29tL2htZy1wcm9kLnMzLmFtYXpvbmF3cy5jb20vaW1hZ2VzLzk4MS9hcnRpY2xlcy8yMDE4LzAyL2dyb3dpbmdva3JhLTEwMDAtMTUxOTMwNjMwOS5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlZCBPa3JhXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzI1NTAvODczMC9wcm9kdWN0cy9Pa3JhX1JlZC1CdXJndW5keV9vbi1wbGFudC13LWJsb3Nzb21fbG9nby5wcm9ncmVzc2l2ZS5qcGc/dj0xNTc4MzI2NDI0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJSb21haW4gTGV0dHVjZVwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmdhcmRlbmluZ2tub3dob3cuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3JvbWFpbmUuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3RhdG9cIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5tb2xiYWtzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9iYW5uZXItMS0xMjAweDU2NS5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNhcnJvdFwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vYmFsY29ueWdhcmRlbndlYi1saG5meDBiZW9tcXZuaHNweC5uZXRkbmEtc3NsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9jYXJyb3QtY29tcGFuaW9uLXBsYW50cy0yX21pbmkuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDdWN1bWJlclwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vZ2FyZGVuZXJzcGF0aC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDQvZ3Jvdy1jdWN1bWJlci1GQi5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJyb2NvbGlcIixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2VkZ2UuYm9ubmllcGxhbnRzLmNvbS93d3cvdGlueS91cGxvYWRzLzIwMjAwODEwMjA0OTM4L2xpZXV0ZW5hbnQtYnJvY2NvbGkuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJCbGFjayBiZXJyeVwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmFsbWFuYWMuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvdXNlcnMvQWxtYW5hY1N0YWZmQXJjaGl2ZS9ibHVlYmVycmllc19mdWxsX3dpZHRoLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page.js\n");

/***/ }),

/***/ "./pages/page.module.scss":
/*!********************************!*\
  !*** ./pages/page.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"page_main__3E89R\",\n\t\"image\": \"page_image__1JQRc\",\n\t\"name\": \"page_name__2nY-6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLm1vZHVsZS5zY3NzPzE2YWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvcGFnZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJwYWdlX21haW5fXzNFODlSXCIsXG5cdFwiaW1hZ2VcIjogXCJwYWdlX2ltYWdlX18xSlFSY1wiLFxuXHRcIm5hbWVcIjogXCJwYWdlX25hbWVfXzJuWS02XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page.module.scss\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });