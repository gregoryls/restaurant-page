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

  const review = createElementWithId("section", "review");
  const reviewText = createElementWithId("p", "reviewText");
  reviewText.textContent = customerReview;

  const reviewName = createElementWithId("p", "reviewName");
  reviewName.textContent = "- John Eater";
  review.appendChild(reviewText);
  review.appendChild(reviewName);
  return review;
}

function createHours() {
  // creates div for the operating hours
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = createElementWithId("section", "hours");

  const hoursHeader = createElementWithId("h2");
  hoursHeader.textContent = "Hours";
  hours.appendChild(hoursHeader);

  const hoursList = createElementWithId("ul");
  // use if statements to select days for different than normal hours
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
  const location = createElementWithId("section", "location");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsZW07XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0SW1hZ2Uoc291cmNlKSB7XHJcbiAgY29uc3QgdGVtcCA9IG5ldyBJbWFnZSgpO1xyXG4gIHRlbXAuc3JjID0gc291cmNlO1xyXG5cclxuICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KCkge1xyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgd2l0aCBhIHJlc3RhdXJhbnQgcmV2aWV3IGZvbGxvd2VkIGJ5IHRoZSBuYW1lIG9mIHRoZSByZXZpZXdlclxyXG4gIGNvbnN0IGN1c3RvbWVyUmV2aWV3ID1cclxuICAgIFwiSSByZWNlbnRseSBoYWQgdGhlIHBsZWFzdXJlIG9mIGRpbmluZyBhdCBhIGZhcm0gdG8gdGFibGUgcmVzdGF1cmFudCwgYW5kIEkgbXVzdCBzYXksIGl0IHdhcyBhbiBvdXRzdGFuZGluZyBleHBlcmllbmNlLiBGcm9tIHRoZSBtb21lbnQgSSB3YWxrZWQgaW4sIHRoZSBhdG1vc3BoZXJlIHdhcyB3YXJtIGFuZCBpbnZpdGluZywgd2l0aCBhIGNoYXJtaW5nIHJ1c3RpYyBkZWNvciBhbmQgYSBjb3p5IGZlZWwuIFRoZSBtZW51IHdhcyBmdWxsIG9mIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMsIGFuZCBlYWNoIGRpc2ggd2FzIHByZXBhcmVkIHdpdGggc2tpbGwgYW5kIGNhcmUuXCI7XHJcblxyXG4gIGNvbnN0IHJldmlldyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJzZWN0aW9uXCIsIFwicmV2aWV3XCIpO1xyXG4gIGNvbnN0IHJldmlld1RleHQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiLCBcInJldmlld1RleHRcIik7XHJcbiAgcmV2aWV3VGV4dC50ZXh0Q29udGVudCA9IGN1c3RvbWVyUmV2aWV3O1xyXG5cclxuICBjb25zdCByZXZpZXdOYW1lID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJyZXZpZXdOYW1lXCIpO1xyXG4gIHJldmlld05hbWUudGV4dENvbnRlbnQgPSBcIi0gSm9obiBFYXRlclwiO1xyXG4gIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdUZXh0KTtcclxuICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3TmFtZSk7XHJcbiAgcmV0dXJuIHJldmlldztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgLy8gY3JlYXRlcyBkaXYgZm9yIHRoZSBvcGVyYXRpbmcgaG91cnNcclxuICBjb25zdCB3ZWVrZGF5cyA9IFtcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXCJTdW5kYXlcIixcclxuICBdO1xyXG4gIGNvbnN0IGhvdXJzID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgXCJob3Vyc1wiKTtcclxuXHJcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xyXG5cclxuICBjb25zdCBob3Vyc0xpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwidWxcIik7XHJcbiAgLy8gdXNlIGlmIHN0YXRlbWVudHMgdG8gc2VsZWN0IGRheXMgZm9yIGRpZmZlcmVudCB0aGFuIG5vcm1hbCBob3Vyc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwibGlcIik7XHJcbiAgICBpZiAoaSA9PT0gNSB8fCBpID09PSAyKSB7XHJcbiAgICAgIGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXlzW2ldfTogQ2xvc2VkYDtcclxuICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5c1tpXX06IDEyUE0gLSA5UE1gO1xyXG4gICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIH1cclxuICB9XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuICByZXR1cm4gaG91cnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFwiMTIzIEZha2UgU3QuIFNwcmluZ2ZpZWxkLCBJbCAxMjM0NVwiO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgXCJsb2NhdGlvblwiKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvblN0cmluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIpO1xyXG4gIGxvY2F0aW9uU3RyaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhO1xyXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uU3RyaW5nKTtcclxuXHJcbiAgcmV0dXJuIGxvY2F0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRXaXRoSWQsIGltcG9ydEltYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgYXBwMVNhbG1vbkJsaW5pIGZyb20gXCIuL2FwcDFTYWxtb25CbGluaS5qcGdcIjtcclxuaW1wb3J0IGFwcDJTcGluYWNoUHVmZiBmcm9tIFwiLi9hcHAyU3BpbmFjaFB1ZmYuanBnXCI7XHJcbmltcG9ydCBtYWluMUJlZWZTdGV3IGZyb20gXCIuL21haW4xQmVlZlN0ZXcuanBnXCI7XHJcbmltcG9ydCBtYWluMktlYmFiUGxhdHRlciBmcm9tIFwiLi9tYWluMktlYmFiUGxhdHRlci5qcGdcIjtcclxuaW1wb3J0IGRlc3NlcnQxT3Jlb1BhcmZhaXQgZnJvbSBcIi4vZGVzc2VydDFPcmVvUGFyZmFpdC5qcGdcIjtcclxuaW1wb3J0IGRlc3NlcnQyTWFjYXJvbnMgZnJvbSBcIi4vZGVzc2VydDJNYWNhcm9ucy5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uSGVhZGVyKHR5cGUpIHtcclxuICAvLyBjcmVhdGVzIGEgc2VjdGlvbiArIGhlYWRlciBmb3IgYSBnaXZlbiB0eXBlLCBzdWNoIGFzIEFwcGV0aXplcnMgZXRjXHJcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJzZWN0aW9uXCIsIGBjb250ZW50JHt0eXBlfWApO1xyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtc1wiKTtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDNcIiwgYGhlYWRlciR7dHlwZX1gKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0eXBlO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGlkLCBzb3VyY2UsIHByaWNlKSB7XHJcbiAgLy8gY3JlYXRlcyBlbGVtZW50cyBmb3IgbWVudSBpdGVtIG5hbWVzIHByaWNlcyBhbmQgYW4gaW1hZ2Ugb2YgdGhlIGRpc2hcclxuICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBgJHtpZH1gKTtcclxuICBjb25zdCBpdGVtVGV4dCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIpO1xyXG4gIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gYCR7bmFtZX0gLSAkJHtwcmljZX1gO1xyXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xyXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaW1wb3J0SW1hZ2Uoc291cmNlKSk7XHJcblxyXG4gIHJldHVybiBpdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51SGVhZGVyKCkge1xyXG4gIC8vIGNyZWF0ZXMgdGhlIG1lbnUgdGl0bGUgZWxlbWVudCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlXHJcbiAgY29uc3QgaGVhZGVyV3JhcCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJtZW51SGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgaGVhZGVyV3JhcC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyV3JhcDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZXRpemVycygpIHtcclxuICBjb25zdCBhcHBldGl6ZXJDb250ZW50ID0gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIoXCJBcHBldGl6ZXJzXCIpO1xyXG5cclxuICAvLyB3cmFwIG1lbnUgaXRlbXMgdG9nZXRoZXIgaW4gYSBkaXYgZm9yIGVhc2llciBzdHlsaW5nXHJcbiAgY29uc3QgYXBwZXRpemVyV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJhcHBldGl6ZXJXcmFwcGVyXCIpO1xyXG5cclxuICBhcHBldGl6ZXJXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJTYWxtb24gQmxpbmlcIiwgXCJhcHBldGl6ZXIxXCIsIGFwcDFTYWxtb25CbGluaSwgOS45OSlcclxuICApO1xyXG4gIGFwcGV0aXplcldyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlNwaW5hY2ggUHVmZnNcIiwgXCJhcHBldGl6ZXIyXCIsIGFwcDJTcGluYWNoUHVmZiwgOC45OSlcclxuICApO1xyXG5cclxuICBhcHBldGl6ZXJDb250ZW50LmFwcGVuZENoaWxkKGFwcGV0aXplcldyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gYXBwZXRpemVyQ29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbnMoKSB7XHJcbiAgY29uc3QgbWFpbnNDb250ZW50ID0gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIoXCJNYWluc1wiKTtcclxuICBjb25zdCBtYWluc1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwibWFpbnNXcmFwcGVyXCIpO1xyXG5cclxuICBtYWluc1dyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIkJlZWYgU3Rld1wiLCBcIm1haW4xXCIsIG1haW4xQmVlZlN0ZXcsIDE1LjU1KVxyXG4gICk7XHJcbiAgbWFpbnNXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJLZWJhYiBQbGF0dGVyXCIsIFwibWFpbjJcIiwgbWFpbjJLZWJhYlBsYXR0ZXIsIDEzLjM3KVxyXG4gICk7XHJcblxyXG4gIG1haW5zQ29udGVudC5hcHBlbmRDaGlsZChtYWluc1dyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gbWFpbnNDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNzZXJ0cygpIHtcclxuICBjb25zdCBkZXNzZXJ0c0NvbnRlbnQgPSBjcmVhdGVNZW51U2VjdGlvbkhlYWRlcihcIkRlc3NlcnRzXCIpO1xyXG4gIGNvbnN0IGRlc3NlcnRzV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJkZXNzZXJ0c1dyYXBwZXJcIik7XHJcblxyXG4gIGRlc3NlcnRzV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiT3JlbyBQYXJmYWl0XCIsIFwiZGVzc2VydDFcIiwgZGVzc2VydDFPcmVvUGFyZmFpdCwgMy41KVxyXG4gICk7XHJcbiAgZGVzc2VydHNXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJNYWNhcm9uc1wiLCBcImRlc3NlcnQyXCIsIGRlc3NlcnQyTWFjYXJvbnMsIDkwMDEpXHJcbiAgKTtcclxuXHJcbiAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzV3JhcHBlcik7XHJcblxyXG4gIHJldHVybiBkZXNzZXJ0c0NvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChhcHBldGl6ZXJzKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbnMoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0cygpKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=