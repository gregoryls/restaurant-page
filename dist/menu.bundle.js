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

  return temp;
}

function createReview() {
  // creates a div with a restaurant review followed by the name of the reviewer
  const customerReview =
    "I recently had the pleasure of dining at a farm to table restaurant, and I must say, it was an outstanding experience. From the moment I walked in, the atmosphere was warm and inviting, with a charming rustic decor and a cozy feel. The menu was full of fresh, locally-sourced ingredients, and each dish was prepared with skill and care.";

  const review = createElementWithId("div", "review");
  const reviewText = createElementWithId("p", "reviewText");
  reviewText.textContent = customerReview;

  const reviewName = createElementWithId("p", "reviewName");
  reviewName.textContent = "- John Eater";
  review.appendChild(reviewText);
  review.appendChild(reviewName);
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
    if (i === 5 || i === 2) {
      day.textContent = `${weekdays[i]}: Closed`;
      hoursList.appendChild(day);
    } else {
      day.textContent = `${weekdays[i]}: 12PM - 9PM`;
      hoursList.appendChild(day);
    }
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
  // creates a section + header for a given type, such as Appetizers etc
  const content = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("section", `content${type}`);
  content.classList.add("menuItems");
  const header = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h3", `header${type}`);
  header.textContent = type;
  content.appendChild(header);

  return content;
}

function createMenuItem(name, id, source, price) {
  // creates elements for menu item names prices and an image of the dish
  const item = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", `${id}`);
  const itemText = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("p");
  itemText.textContent = `${name} - $${price}`;
  item.appendChild(itemText);
  item.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.importImage)(source));

  return item;
}

function menuHeader() {
  // creates the menu title element at the top of the page
  const headerWrap = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "menuHeader");

  const header = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);

  return headerWrap;
}

function appetizers() {
  const appetizerContent = createMenuSectionHeader("Appetizers");

  // wrap menu items together in a div for easier styling
  const appetizerWrapper = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "appetizerWrapper");

  appetizerWrapper.appendChild(
    createMenuItem("Salmon Blini", "appetizer1", _app1SalmonBlini_jpg__WEBPACK_IMPORTED_MODULE_1__, 9.99)
  );
  appetizerWrapper.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", _app2SpinachPuff_jpg__WEBPACK_IMPORTED_MODULE_2__, 8.99)
  );

  appetizerContent.appendChild(appetizerWrapper);

  return appetizerContent;
}

function mains() {
  const mainsContent = createMenuSectionHeader("Mains");
  const mainsWrapper = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "mainsWrapper");

  mainsWrapper.appendChild(
    createMenuItem("Beef Stew", "main1", _main1BeefStew_jpg__WEBPACK_IMPORTED_MODULE_3__, 15.55)
  );
  mainsWrapper.appendChild(
    createMenuItem("Kebab Platter", "main2", _main2KebabPlatter_jpg__WEBPACK_IMPORTED_MODULE_4__, 13.37)
  );

  mainsContent.appendChild(mainsWrapper);

  return mainsContent;
}

function desserts() {
  const dessertsContent = createMenuSectionHeader("Desserts");
  const dessertsWrapper = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "dessertsWrapper");

  dessertsWrapper.appendChild(
    createMenuItem("Oreo Parfait", "dessert1", _dessert1OreoParfait_jpg__WEBPACK_IMPORTED_MODULE_5__, 3.5)
  );
  dessertsWrapper.appendChild(
    createMenuItem("Macarons", "dessert2", _dessert2Macarons_jpg__WEBPACK_IMPORTED_MODULE_6__, 9001)
  );

  dessertsContent.appendChild(dessertsWrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJZChlbGVtZW50LCBpZCkge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZWxlbTtcclxuICBlbGVtLmlkID0gaWQ7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRJbWFnZShzb3VyY2UpIHtcclxuICBjb25zdCB0ZW1wID0gbmV3IEltYWdlKCk7XHJcbiAgdGVtcC5zcmMgPSBzb3VyY2U7XHJcblxyXG4gIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXZpZXcoKSB7XHJcbiAgLy8gY3JlYXRlcyBhIGRpdiB3aXRoIGEgcmVzdGF1cmFudCByZXZpZXcgZm9sbG93ZWQgYnkgdGhlIG5hbWUgb2YgdGhlIHJldmlld2VyXHJcbiAgY29uc3QgY3VzdG9tZXJSZXZpZXcgPVxyXG4gICAgXCJJIHJlY2VudGx5IGhhZCB0aGUgcGxlYXN1cmUgb2YgZGluaW5nIGF0IGEgZmFybSB0byB0YWJsZSByZXN0YXVyYW50LCBhbmQgSSBtdXN0IHNheSwgaXQgd2FzIGFuIG91dHN0YW5kaW5nIGV4cGVyaWVuY2UuIEZyb20gdGhlIG1vbWVudCBJIHdhbGtlZCBpbiwgdGhlIGF0bW9zcGhlcmUgd2FzIHdhcm0gYW5kIGludml0aW5nLCB3aXRoIGEgY2hhcm1pbmcgcnVzdGljIGRlY29yIGFuZCBhIGNvenkgZmVlbC4gVGhlIG1lbnUgd2FzIGZ1bGwgb2YgZnJlc2gsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cywgYW5kIGVhY2ggZGlzaCB3YXMgcHJlcGFyZWQgd2l0aCBza2lsbCBhbmQgY2FyZS5cIjtcclxuXHJcbiAgY29uc3QgcmV2aWV3ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInJldmlld1wiKTtcclxuICBjb25zdCByZXZpZXdUZXh0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJyZXZpZXdUZXh0XCIpO1xyXG4gIHJldmlld1RleHQudGV4dENvbnRlbnQgPSBjdXN0b21lclJldmlldztcclxuXHJcbiAgY29uc3QgcmV2aWV3TmFtZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIsIFwicmV2aWV3TmFtZVwiKTtcclxuICByZXZpZXdOYW1lLnRleHRDb250ZW50ID0gXCItIEpvaG4gRWF0ZXJcIjtcclxuICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3VGV4dCk7XHJcbiAgcmV2aWV3LmFwcGVuZENoaWxkKHJldmlld05hbWUpO1xyXG4gIHJldHVybiByZXZpZXc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gIGNvbnN0IHdlZWtkYXlzID0gW1xyXG4gICAgXCJNb25kYXlcIixcclxuICAgIFwiVHVlc2RheVwiLFxyXG4gICAgXCJXZWRuZXNkYXlcIixcclxuICAgIFwiVGh1cnNkYXlcIixcclxuICAgIFwiRnJpZGF5XCIsXHJcbiAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBcIlN1bmRheVwiLFxyXG4gIF07XHJcbiAgY29uc3QgaG91cnMgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwiaG91cnNcIik7XHJcblxyXG4gIGNvbnN0IGhvdXJzSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgyXCIpO1xyXG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcclxuXHJcbiAgY29uc3QgaG91cnNMaXN0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInVsXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwibGlcIik7XHJcbiAgICBpZiAoaSA9PT0gNSB8fCBpID09PSAyKSB7XHJcbiAgICAgIGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXlzW2ldfTogQ2xvc2VkYDtcclxuICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5c1tpXX06IDEyUE0gLSA5UE1gO1xyXG4gICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIH1cclxuICB9XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuICByZXR1cm4gaG91cnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFwiMTIzIEZha2UgU3QuIFNwcmluZ2ZpZWxkLCBJbCAxMjM0NVwiO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImxvY2F0aW9uXCIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uU3RyaW5nID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgbG9jYXRpb25TdHJpbmcudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGE7XHJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25TdHJpbmcpO1xyXG5cclxuICByZXR1cm4gbG9jYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVJldmlldygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhJZCwgaW1wb3J0SW1hZ2UgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBhcHAxU2FsbW9uQmxpbmkgZnJvbSBcIi4vYXBwMVNhbG1vbkJsaW5pLmpwZ1wiO1xyXG5pbXBvcnQgYXBwMlNwaW5hY2hQdWZmIGZyb20gXCIuL2FwcDJTcGluYWNoUHVmZi5qcGdcIjtcclxuaW1wb3J0IG1haW4xQmVlZlN0ZXcgZnJvbSBcIi4vbWFpbjFCZWVmU3Rldy5qcGdcIjtcclxuaW1wb3J0IG1haW4yS2ViYWJQbGF0dGVyIGZyb20gXCIuL21haW4yS2ViYWJQbGF0dGVyLmpwZ1wiO1xyXG5pbXBvcnQgZGVzc2VydDFPcmVvUGFyZmFpdCBmcm9tIFwiLi9kZXNzZXJ0MU9yZW9QYXJmYWl0LmpwZ1wiO1xyXG5pbXBvcnQgZGVzc2VydDJNYWNhcm9ucyBmcm9tIFwiLi9kZXNzZXJ0Mk1hY2Fyb25zLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIodHlwZSkge1xyXG4gIC8vIGNyZWF0ZXMgYSBzZWN0aW9uICsgaGVhZGVyIGZvciBhIGdpdmVuIHR5cGUsIHN1Y2ggYXMgQXBwZXRpemVycyBldGNcclxuICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgYGNvbnRlbnQke3R5cGV9YCk7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1zXCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoM1wiLCBgaGVhZGVyJHt0eXBlfWApO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHR5cGU7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgaWQsIHNvdXJjZSwgcHJpY2UpIHtcclxuICAvLyBjcmVhdGVzIGVsZW1lbnRzIGZvciBtZW51IGl0ZW0gbmFtZXMgcHJpY2VzIGFuZCBhbiBpbWFnZSBvZiB0aGUgZGlzaFxyXG4gIGNvbnN0IGl0ZW0gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIGAke2lkfWApO1xyXG4gIGNvbnN0IGl0ZW1UZXh0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBgJHtuYW1lfSAtICQke3ByaWNlfWA7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChpbXBvcnRJbWFnZShzb3VyY2UpKTtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVIZWFkZXIoKSB7XHJcbiAgLy8gY3JlYXRlcyB0aGUgbWVudSB0aXRsZSBlbGVtZW50IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcclxuICBjb25zdCBoZWFkZXJXcmFwID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcIm1lbnVIZWFkZXJcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBoZWFkZXJXcmFwLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBoZWFkZXJXcmFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBldGl6ZXJzKCkge1xyXG4gIGNvbnN0IGFwcGV0aXplckNvbnRlbnQgPSBjcmVhdGVNZW51U2VjdGlvbkhlYWRlcihcIkFwcGV0aXplcnNcIik7XHJcblxyXG4gIC8vIHdyYXAgbWVudSBpdGVtcyB0b2dldGhlciBpbiBhIGRpdiBmb3IgZWFzaWVyIHN0eWxpbmdcclxuICBjb25zdCBhcHBldGl6ZXJXcmFwcGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImFwcGV0aXplcldyYXBwZXJcIik7XHJcblxyXG4gIGFwcGV0aXplcldyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlNhbG1vbiBCbGluaVwiLCBcImFwcGV0aXplcjFcIiwgYXBwMVNhbG1vbkJsaW5pLCA5Ljk5KVxyXG4gICk7XHJcbiAgYXBwZXRpemVyV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiU3BpbmFjaCBQdWZmc1wiLCBcImFwcGV0aXplcjJcIiwgYXBwMlNwaW5hY2hQdWZmLCA4Ljk5KVxyXG4gICk7XHJcblxyXG4gIGFwcGV0aXplckNvbnRlbnQuYXBwZW5kQ2hpbGQoYXBwZXRpemVyV3JhcHBlcik7XHJcblxyXG4gIHJldHVybiBhcHBldGl6ZXJDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWlucygpIHtcclxuICBjb25zdCBtYWluc0NvbnRlbnQgPSBjcmVhdGVNZW51U2VjdGlvbkhlYWRlcihcIk1haW5zXCIpO1xyXG4gIGNvbnN0IG1haW5zV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJtYWluc1dyYXBwZXJcIik7XHJcblxyXG4gIG1haW5zV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQmVlZiBTdGV3XCIsIFwibWFpbjFcIiwgbWFpbjFCZWVmU3RldywgMTUuNTUpXHJcbiAgKTtcclxuICBtYWluc1dyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIktlYmFiIFBsYXR0ZXJcIiwgXCJtYWluMlwiLCBtYWluMktlYmFiUGxhdHRlciwgMTMuMzcpXHJcbiAgKTtcclxuXHJcbiAgbWFpbnNDb250ZW50LmFwcGVuZENoaWxkKG1haW5zV3JhcHBlcik7XHJcblxyXG4gIHJldHVybiBtYWluc0NvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3NlcnRzKCkge1xyXG4gIGNvbnN0IGRlc3NlcnRzQ29udGVudCA9IGNyZWF0ZU1lbnVTZWN0aW9uSGVhZGVyKFwiRGVzc2VydHNcIik7XHJcbiAgY29uc3QgZGVzc2VydHNXcmFwcGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImRlc3NlcnRzV3JhcHBlclwiKTtcclxuXHJcbiAgZGVzc2VydHNXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJPcmVvIFBhcmZhaXRcIiwgXCJkZXNzZXJ0MVwiLCBkZXNzZXJ0MU9yZW9QYXJmYWl0LCAzLjUpXHJcbiAgKTtcclxuICBkZXNzZXJ0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIk1hY2Fyb25zXCIsIFwiZGVzc2VydDJcIiwgZGVzc2VydDJNYWNhcm9ucywgOTAwMSlcclxuICApO1xyXG5cclxuICBkZXNzZXJ0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydHNXcmFwcGVyKTtcclxuXHJcbiAgcmV0dXJuIGRlc3NlcnRzQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGFwcGV0aXplcnMoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWlucygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzKCkpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==