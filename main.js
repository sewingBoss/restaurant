/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHome: () => (/* binding */ addHome)\n/* harmony export */ });\n\nfunction addHome(contentDiv){\n    const homeTab = document.createElement('div');\n    homeTab.classList.add('tab');\n    homeTab.textContent = 'This is the home tab';\n    \n    contentDiv.appendChild(homeTab);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2FkZEhvbWUsfTtcbmZ1bmN0aW9uIGFkZEhvbWUoY29udGVudERpdil7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHRoZSBob21lIHRhYic7XG4gICAgXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentDiv: () => (/* binding */ contentDiv)\n/* harmony export */ });\n/* harmony import */ var _menu_tenin_yobu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_tenin_yobu.png */ \"./src/menu_tenin_yobu.png\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\nconst contentDiv = document.querySelector('div#content');\n\n//append image\nconst myImg = new Image();\nmyImg.src = _menu_tenin_yobu_png__WEBPACK_IMPORTED_MODULE_0__;\n\ncontentDiv.appendChild(myImg);\n\n//append p\nconst myP = document.createElement('p');\nmyP.textContent = 'this is a restaurant project. I will be adding restaurant stuff here.';\n\ncontentDiv.appendChild(myP);\n\n//append Home tab button\nconst homeBtn = document.querySelector('button.home');\nhomeBtn.addEventListener('click',(e)=>{\n    hideTabs();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.addHome)(contentDiv);\n})\n\n//append Menu tab button\nconst menuBtn = document.querySelector('button.menu');\nmenuBtn.setAttribute(\"type\", \"button\");\n\nmenuBtn.addEventListener('click',(e)=>{\n    hideTabs();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.addMenu)(contentDiv);\n})\n\n\n//utility methods\n //hide all tabs\n    function hideTabs(){\n        const tabs = contentDiv.querySelectorAll('div.tab');\n        tabs.forEach((tab, index)=>{\n            tab.setAttribute(\"hidden\", \"\");\n        });\n    };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUNYO0FBQ0E7QUFDYjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBLFlBQVksaURBQVE7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQU87QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpREFBTztBQUNYLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW5pbmltZyBmcm9tIFwiLi9tZW51X3RlbmluX3lvYnUucG5nXCI7XG5pbXBvcnQge2FkZEhvbWV9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7YWRkTWVudX0gZnJvbSBcIi4vbWVudS5qc1wiO1xuZXhwb3J0IHtjb250ZW50RGl2LH07XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuXG4vL2FwcGVuZCBpbWFnZVxuY29uc3QgbXlJbWcgPSBuZXcgSW1hZ2UoKTtcbm15SW1nLnNyYyA9IFRlbmluaW1nO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG15SW1nKTtcblxuLy9hcHBlbmQgcFxuY29uc3QgbXlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubXlQLnRleHRDb250ZW50ID0gJ3RoaXMgaXMgYSByZXN0YXVyYW50IHByb2plY3QuIEkgd2lsbCBiZSBhZGRpbmcgcmVzdGF1cmFudCBzdHVmZiBoZXJlLic7XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobXlQKTtcblxuLy9hcHBlbmQgSG9tZSB0YWIgYnV0dG9uXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmhvbWUnKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGhpZGVUYWJzKCk7XG4gICAgYWRkSG9tZShjb250ZW50RGl2KTtcbn0pXG5cbi8vYXBwZW5kIE1lbnUgdGFiIGJ1dHRvblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5tZW51Jyk7XG5tZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGhpZGVUYWJzKCk7XG4gICAgYWRkTWVudShjb250ZW50RGl2KTtcbn0pXG5cblxuLy91dGlsaXR5IG1ldGhvZHNcbiAvL2hpZGUgYWxsIHRhYnNcbiAgICBmdW5jdGlvbiBoaWRlVGFicygpe1xuICAgICAgICBjb25zdCB0YWJzID0gY29udGVudERpdi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGFiJyk7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCk9PntcbiAgICAgICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMenu: () => (/* binding */ addMenu)\n/* harmony export */ });\n\nfunction addMenu(contentDiv){\n    const menuTab = document.createElement('div');\n    menuTab.classList.add('tab');\n    menuTab.textContent = 'This is the menu. Menu includes Borcht, Sushi, and ligma';\n    contentDiv.appendChild(menuTab);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHthZGRNZW51LH1cbmZ1bmN0aW9uIGFkZE1lbnUoY29udGVudERpdil7XG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHRoZSBtZW51LiBNZW51IGluY2x1ZGVzIEJvcmNodCwgU3VzaGksIGFuZCBsaWdtYSc7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/menu_tenin_yobu.png":
/*!*********************************!*\
  !*** ./src/menu_tenin_yobu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94c9ca1a92b6c7bb17cb.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;