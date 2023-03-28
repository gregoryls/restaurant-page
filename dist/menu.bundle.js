/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementWithId": () => (/* binding */ createElementWithId),
/* harmony export */   "default": () => (/* binding */ home),
/* harmony export */   "importImage": () => (/* binding */ importImage)
/* harmony export */ });
function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

function importImage(source) {
  const temp = new Image();
  temp.src = source;
  // temp.id = source;

  return temp;
}
// TODO put review inside a p probably

function createReview() {
  const review = createElementWithId("div", "review");
  review.textContent =
    "I recently had the pleasure of dining at a farm to table restaurant, and I must say, it was an outstanding experience. From the moment I walked in, the atmosphere was warm and inviting, with a charming rustic decor and a cozy feel. The menu was full of fresh, locally-sourced ingredients, and each dish was prepared with skill and care. -John Eater";
  return review;
}

function createHours() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = createElementWithId("div", "hours");

  const hoursHeader = createElementWithId("h2");
  hoursHeader.textContent = "Hours";
  hours.appendChild(hoursHeader);

  const hoursList = createElementWithId("ul");
  for (let i = 0; i < 7; i += 1) {
    const day = createElementWithId("li");
    day.textContent = `${weekdays[i]}: 12PM - 9PM`;
    hoursList.appendChild(day);
  }
  hours.appendChild(hoursList);
  return hours;
}

function createLocation() {
  const locationData = "123 Fake St. Springfield, Il 12345";
  const location = createElementWithId("div", "location");

  const locationHeader = createElementWithId("h2");
  locationHeader.textContent = "Location";
  location.appendChild(locationHeader);

  const locationString = createElementWithId("p");
  locationString.textContent = locationData;
  location.appendChild(locationString);

  return location;
}

function home() {
  const content = document.getElementById("content");
  content.appendChild(createReview());
  content.appendChild(createHours());
  content.appendChild(createLocation());
}


/***/ }),

/***/ "./src/app1SalmonBlini.jpg":
/*!*********************************!*\
  !*** ./src/app1SalmonBlini.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9f598509d0cbfa82bd0.jpg";

/***/ }),

/***/ "./src/app2SpinachPuff.jpg":
/*!*********************************!*\
  !*** ./src/app2SpinachPuff.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e34ca7b2f2d3c3d53ec.jpg";

/***/ }),

/***/ "./src/dessert1OreoParfait.jpg":
/*!*************************************!*\
  !*** ./src/dessert1OreoParfait.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f1017a3a15d271b6f5c.jpg";

/***/ }),

/***/ "./src/dessert2Macarons.jpg":
/*!**********************************!*\
  !*** ./src/dessert2Macarons.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2dca1f19adeeb87994f.jpg";

/***/ }),

/***/ "./src/main1BeefStew.jpg":
/*!*******************************!*\
  !*** ./src/main1BeefStew.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f2466b551c62215d1b5.jpg";

/***/ }),

/***/ "./src/main2KebabPlatter.jpg":
/*!***********************************!*\
  !*** ./src/main2KebabPlatter.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3dbdb1dbde87cd5ad82.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _app1SalmonBlini_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app1SalmonBlini.jpg */ "./src/app1SalmonBlini.jpg");
/* harmony import */ var _app2SpinachPuff_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app2SpinachPuff.jpg */ "./src/app2SpinachPuff.jpg");
/* harmony import */ var _main1BeefStew_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main1BeefStew.jpg */ "./src/main1BeefStew.jpg");
/* harmony import */ var _main2KebabPlatter_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main2KebabPlatter.jpg */ "./src/main2KebabPlatter.jpg");
/* harmony import */ var _dessert1OreoParfait_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dessert1OreoParfait.jpg */ "./src/dessert1OreoParfait.jpg");
/* harmony import */ var _dessert2Macarons_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dessert2Macarons.jpg */ "./src/dessert2Macarons.jpg");








function createMenuSectionHeader(type) {
  const content = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("section", `content${type}`);
  content.classList.add("menuItems");
  const header = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h3", `header${type}`);
  header.textContent = type;
  content.appendChild(header);

  return content;
}

function createMenuItem(name, id, source, price) {
  const item = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", `${id}`);
  const itemText = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("p");
  itemText.textContent = `${name} - $${price}`;
  item.appendChild(itemText);
  item.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.importImage)(source));

  return item;
}

function menuHeader() {
  const headerWrap = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "menuHeader");

  const header = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);

  return headerWrap;
}

function appetizers() {
  const appetizerContent = createMenuSectionHeader("Appetizers");

  appetizerContent.appendChild(
    createMenuItem("Salmon Blini", "appetizer1", _app1SalmonBlini_jpg__WEBPACK_IMPORTED_MODULE_1__, 9.99)
  );
  appetizerContent.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", _app2SpinachPuff_jpg__WEBPACK_IMPORTED_MODULE_2__, 8.99)
  );

  return appetizerContent;
}

function mains() {
  const mainsContent = createMenuSectionHeader("Mains");

  mainsContent.appendChild(
    createMenuItem("Beef Stew", "main1", _main1BeefStew_jpg__WEBPACK_IMPORTED_MODULE_3__, 15.55)
  );
  mainsContent.appendChild(
    createMenuItem("Kebab Platter", "main2", _main2KebabPlatter_jpg__WEBPACK_IMPORTED_MODULE_4__, 13.37)
  );

  return mainsContent;
}

function desserts() {
  const dessertsContent = createMenuSectionHeader("Desserts");

  dessertsContent.appendChild(
    createMenuItem("Oreo Parfait", "dessert1", _dessert1OreoParfait_jpg__WEBPACK_IMPORTED_MODULE_5__, 3.5)
  );
  dessertsContent.appendChild(
    createMenuItem("Macarons", "dessert2", _dessert2Macarons_jpg__WEBPACK_IMPORTED_MODULE_6__, 9001)
  );

  return dessertsContent;
}

function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
  content.appendChild(mains());
  content.appendChild(desserts());
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YwRDtBQUNOO0FBQ0E7QUFDSjtBQUNRO0FBQ0k7QUFDTjtBQUN0RDtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFtQixzQkFBc0IsS0FBSztBQUNoRTtBQUNBLGlCQUFpQiwwREFBbUIsZ0JBQWdCLEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBEQUFtQixXQUFXLEdBQUc7QUFDaEQsbUJBQW1CLDBEQUFtQjtBQUN0Qyw0QkFBNEIsTUFBTSxLQUFLLE1BQU07QUFDN0M7QUFDQSxtQkFBbUIsa0RBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBbUI7QUFDeEM7QUFDQSxpQkFBaUIsMERBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlEQUFlO0FBQ2hFO0FBQ0E7QUFDQSxrREFBa0QsaURBQWU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtDQUFhO0FBQ3REO0FBQ0E7QUFDQSw2Q0FBNkMsbURBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxREFBbUI7QUFDbEU7QUFDQTtBQUNBLDJDQUEyQyxrREFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgaWYgKGlkID09PSB1bmRlZmluZWQpIHJldHVybiBlbGVtO1xyXG4gIGVsZW0uaWQgPSBpZDtcclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEltYWdlKHNvdXJjZSkge1xyXG4gIGNvbnN0IHRlbXAgPSBuZXcgSW1hZ2UoKTtcclxuICB0ZW1wLnNyYyA9IHNvdXJjZTtcclxuICAvLyB0ZW1wLmlkID0gc291cmNlO1xyXG5cclxuICByZXR1cm4gdGVtcDtcclxufVxyXG4vLyBUT0RPIHB1dCByZXZpZXcgaW5zaWRlIGEgcCBwcm9iYWJseVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KCkge1xyXG4gIGNvbnN0IHJldmlldyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJyZXZpZXdcIik7XHJcbiAgcmV2aWV3LnRleHRDb250ZW50ID1cclxuICAgIFwiSSByZWNlbnRseSBoYWQgdGhlIHBsZWFzdXJlIG9mIGRpbmluZyBhdCBhIGZhcm0gdG8gdGFibGUgcmVzdGF1cmFudCwgYW5kIEkgbXVzdCBzYXksIGl0IHdhcyBhbiBvdXRzdGFuZGluZyBleHBlcmllbmNlLiBGcm9tIHRoZSBtb21lbnQgSSB3YWxrZWQgaW4sIHRoZSBhdG1vc3BoZXJlIHdhcyB3YXJtIGFuZCBpbnZpdGluZywgd2l0aCBhIGNoYXJtaW5nIHJ1c3RpYyBkZWNvciBhbmQgYSBjb3p5IGZlZWwuIFRoZSBtZW51IHdhcyBmdWxsIG9mIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMsIGFuZCBlYWNoIGRpc2ggd2FzIHByZXBhcmVkIHdpdGggc2tpbGwgYW5kIGNhcmUuIC1Kb2huIEVhdGVyXCI7XHJcbiAgcmV0dXJuIHJldmlldztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgY29uc3Qgd2Vla2RheXMgPSBbXHJcbiAgICBcIk1vbmRheVwiLFxyXG4gICAgXCJUdWVzZGF5XCIsXHJcbiAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgXCJUaHVyc2RheVwiLFxyXG4gICAgXCJGcmlkYXlcIixcclxuICAgIFwiU2F0dXJkYXlcIixcclxuICAgIFwiU3VuZGF5XCIsXHJcbiAgXTtcclxuICBjb25zdCBob3VycyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJob3Vyc1wiKTtcclxuXHJcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xyXG5cclxuICBjb25zdCBob3Vyc0xpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwidWxcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRheSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJsaVwiKTtcclxuICAgIGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXlzW2ldfTogMTJQTSAtIDlQTWA7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICB9XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuICByZXR1cm4gaG91cnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFwiMTIzIEZha2UgU3QuIFNwcmluZ2ZpZWxkLCBJbCAxMjM0NVwiO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImxvY2F0aW9uXCIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uU3RyaW5nID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgbG9jYXRpb25TdHJpbmcudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGE7XHJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25TdHJpbmcpO1xyXG5cclxuICByZXR1cm4gbG9jYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVJldmlldygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhJZCwgaW1wb3J0SW1hZ2UgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBhcHAxU2FsbW9uQmxpbmkgZnJvbSBcIi4vYXBwMVNhbG1vbkJsaW5pLmpwZ1wiO1xyXG5pbXBvcnQgYXBwMlNwaW5hY2hQdWZmIGZyb20gXCIuL2FwcDJTcGluYWNoUHVmZi5qcGdcIjtcclxuaW1wb3J0IG1haW4xQmVlZlN0ZXcgZnJvbSBcIi4vbWFpbjFCZWVmU3Rldy5qcGdcIjtcclxuaW1wb3J0IG1haW4yS2ViYWJQbGF0dGVyIGZyb20gXCIuL21haW4yS2ViYWJQbGF0dGVyLmpwZ1wiO1xyXG5pbXBvcnQgZGVzc2VydDFPcmVvUGFyZmFpdCBmcm9tIFwiLi9kZXNzZXJ0MU9yZW9QYXJmYWl0LmpwZ1wiO1xyXG5pbXBvcnQgZGVzc2VydDJNYWNhcm9ucyBmcm9tIFwiLi9kZXNzZXJ0Mk1hY2Fyb25zLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIodHlwZSkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwic2VjdGlvblwiLCBgY29udGVudCR7dHlwZX1gKTtcclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgzXCIsIGBoZWFkZXIke3R5cGV9YCk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdHlwZTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBpZCwgc291cmNlLCBwcmljZSkge1xyXG4gIGNvbnN0IGl0ZW0gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIGAke2lkfWApO1xyXG4gIGNvbnN0IGl0ZW1UZXh0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBgJHtuYW1lfSAtICQke3ByaWNlfWA7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChpbXBvcnRJbWFnZShzb3VyY2UpKTtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyV3JhcCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJtZW51SGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgaGVhZGVyV3JhcC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyV3JhcDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZXRpemVycygpIHtcclxuICBjb25zdCBhcHBldGl6ZXJDb250ZW50ID0gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIoXCJBcHBldGl6ZXJzXCIpO1xyXG5cclxuICBhcHBldGl6ZXJDb250ZW50LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJTYWxtb24gQmxpbmlcIiwgXCJhcHBldGl6ZXIxXCIsIGFwcDFTYWxtb25CbGluaSwgOS45OSlcclxuICApO1xyXG4gIGFwcGV0aXplckNvbnRlbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlNwaW5hY2ggUHVmZnNcIiwgXCJhcHBldGl6ZXIyXCIsIGFwcDJTcGluYWNoUHVmZiwgOC45OSlcclxuICApO1xyXG5cclxuICByZXR1cm4gYXBwZXRpemVyQ29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbnMoKSB7XHJcbiAgY29uc3QgbWFpbnNDb250ZW50ID0gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIoXCJNYWluc1wiKTtcclxuXHJcbiAgbWFpbnNDb250ZW50LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJCZWVmIFN0ZXdcIiwgXCJtYWluMVwiLCBtYWluMUJlZWZTdGV3LCAxNS41NSlcclxuICApO1xyXG4gIG1haW5zQ29udGVudC5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiS2ViYWIgUGxhdHRlclwiLCBcIm1haW4yXCIsIG1haW4yS2ViYWJQbGF0dGVyLCAxMy4zNylcclxuICApO1xyXG5cclxuICByZXR1cm4gbWFpbnNDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNzZXJ0cygpIHtcclxuICBjb25zdCBkZXNzZXJ0c0NvbnRlbnQgPSBjcmVhdGVNZW51U2VjdGlvbkhlYWRlcihcIkRlc3NlcnRzXCIpO1xyXG5cclxuICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIk9yZW8gUGFyZmFpdFwiLCBcImRlc3NlcnQxXCIsIGRlc3NlcnQxT3Jlb1BhcmZhaXQsIDMuNSlcclxuICApO1xyXG4gIGRlc3NlcnRzQ29udGVudC5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTWFjYXJvbnNcIiwgXCJkZXNzZXJ0MlwiLCBkZXNzZXJ0Mk1hY2Fyb25zLCA5MDAxKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBkZXNzZXJ0c0NvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChhcHBldGl6ZXJzKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbnMoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0cygpKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=