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
  const hours = createElementWithId("div", "hours");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsZW07XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0SW1hZ2Uoc291cmNlKSB7XHJcbiAgY29uc3QgdGVtcCA9IG5ldyBJbWFnZSgpO1xyXG4gIHRlbXAuc3JjID0gc291cmNlO1xyXG5cclxuICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KCkge1xyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgd2l0aCBhIHJlc3RhdXJhbnQgcmV2aWV3IGZvbGxvd2VkIGJ5IHRoZSBuYW1lIG9mIHRoZSByZXZpZXdlclxyXG4gIGNvbnN0IGN1c3RvbWVyUmV2aWV3ID1cclxuICAgIFwiSSByZWNlbnRseSBoYWQgdGhlIHBsZWFzdXJlIG9mIGRpbmluZyBhdCBhIGZhcm0gdG8gdGFibGUgcmVzdGF1cmFudCwgYW5kIEkgbXVzdCBzYXksIGl0IHdhcyBhbiBvdXRzdGFuZGluZyBleHBlcmllbmNlLiBGcm9tIHRoZSBtb21lbnQgSSB3YWxrZWQgaW4sIHRoZSBhdG1vc3BoZXJlIHdhcyB3YXJtIGFuZCBpbnZpdGluZywgd2l0aCBhIGNoYXJtaW5nIHJ1c3RpYyBkZWNvciBhbmQgYSBjb3p5IGZlZWwuIFRoZSBtZW51IHdhcyBmdWxsIG9mIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMsIGFuZCBlYWNoIGRpc2ggd2FzIHByZXBhcmVkIHdpdGggc2tpbGwgYW5kIGNhcmUuXCI7XHJcblxyXG4gIGNvbnN0IHJldmlldyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJzZWN0aW9uXCIsIFwicmV2aWV3XCIpO1xyXG4gIGNvbnN0IHJldmlld1RleHQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiLCBcInJldmlld1RleHRcIik7XHJcbiAgcmV2aWV3VGV4dC50ZXh0Q29udGVudCA9IGN1c3RvbWVyUmV2aWV3O1xyXG5cclxuICBjb25zdCByZXZpZXdOYW1lID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJyZXZpZXdOYW1lXCIpO1xyXG4gIHJldmlld05hbWUudGV4dENvbnRlbnQgPSBcIi0gSm9obiBFYXRlclwiO1xyXG4gIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdUZXh0KTtcclxuICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3TmFtZSk7XHJcbiAgcmV0dXJuIHJldmlldztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgLy8gY3JlYXRlcyBkaXYgZm9yIHRoZSBvcGVyYXRpbmcgaG91cnNcclxuICBjb25zdCB3ZWVrZGF5cyA9IFtcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXCJTdW5kYXlcIixcclxuICBdO1xyXG4gIGNvbnN0IGhvdXJzID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImhvdXJzXCIpO1xyXG5cclxuICBjb25zdCBob3Vyc0hlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XHJcblxyXG4gIGNvbnN0IGhvdXJzTGlzdCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJ1bFwiKTtcclxuICAvLyB1c2UgaWYgc3RhdGVtZW50cyB0byBzZWxlY3QgZGF5cyBmb3IgZGlmZmVyZW50IHRoYW4gbm9ybWFsIGhvdXJzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRheSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJsaVwiKTtcclxuICAgIGlmIChpID09PSA1IHx8IGkgPT09IDIpIHtcclxuICAgICAgZGF5LnRleHRDb250ZW50ID0gYCR7d2Vla2RheXNbaV19OiBDbG9zZWRgO1xyXG4gICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXlzW2ldfTogMTJQTSAtIDlQTWA7XHJcbiAgICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChkYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xyXG4gIHJldHVybiBob3VycztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gXCIxMjMgRmFrZSBTdC4gU3ByaW5nZmllbGQsIElsIDEyMzQ1XCI7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwibG9jYXRpb25cIik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgyXCIpO1xyXG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25TdHJpbmcgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICBsb2NhdGlvblN0cmluZy50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YTtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblN0cmluZyk7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUmV2aWV3KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aElkLCBpbXBvcnRJbWFnZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGFwcDFTYWxtb25CbGluaSBmcm9tIFwiLi9hcHAxU2FsbW9uQmxpbmkuanBnXCI7XHJcbmltcG9ydCBhcHAyU3BpbmFjaFB1ZmYgZnJvbSBcIi4vYXBwMlNwaW5hY2hQdWZmLmpwZ1wiO1xyXG5pbXBvcnQgbWFpbjFCZWVmU3RldyBmcm9tIFwiLi9tYWluMUJlZWZTdGV3LmpwZ1wiO1xyXG5pbXBvcnQgbWFpbjJLZWJhYlBsYXR0ZXIgZnJvbSBcIi4vbWFpbjJLZWJhYlBsYXR0ZXIuanBnXCI7XHJcbmltcG9ydCBkZXNzZXJ0MU9yZW9QYXJmYWl0IGZyb20gXCIuL2Rlc3NlcnQxT3Jlb1BhcmZhaXQuanBnXCI7XHJcbmltcG9ydCBkZXNzZXJ0Mk1hY2Fyb25zIGZyb20gXCIuL2Rlc3NlcnQyTWFjYXJvbnMuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbkhlYWRlcih0eXBlKSB7XHJcbiAgLy8gY3JlYXRlcyBhIHNlY3Rpb24gKyBoZWFkZXIgZm9yIGEgZ2l2ZW4gdHlwZSwgc3VjaCBhcyBBcHBldGl6ZXJzIGV0Y1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwic2VjdGlvblwiLCBgY29udGVudCR7dHlwZX1gKTtcclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgzXCIsIGBoZWFkZXIke3R5cGV9YCk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdHlwZTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBpZCwgc291cmNlLCBwcmljZSkge1xyXG4gIC8vIGNyZWF0ZXMgZWxlbWVudHMgZm9yIG1lbnUgaXRlbSBuYW1lcyBwcmljZXMgYW5kIGFuIGltYWdlIG9mIHRoZSBkaXNoXHJcbiAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgYCR7aWR9YCk7XHJcbiAgY29uc3QgaXRlbVRleHQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICBpdGVtVGV4dC50ZXh0Q29udGVudCA9IGAke25hbWV9IC0gJCR7cHJpY2V9YDtcclxuICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcclxuICBpdGVtLmFwcGVuZENoaWxkKGltcG9ydEltYWdlKHNvdXJjZSkpO1xyXG5cclxuICByZXR1cm4gaXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudUhlYWRlcigpIHtcclxuICAvLyBjcmVhdGVzIHRoZSBtZW51IHRpdGxlIGVsZW1lbnQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxyXG4gIGNvbnN0IGhlYWRlcldyYXAgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwibWVudUhlYWRlclwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgyXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIGhlYWRlcldyYXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcldyYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGV0aXplcnMoKSB7XHJcbiAgY29uc3QgYXBwZXRpemVyQ29udGVudCA9IGNyZWF0ZU1lbnVTZWN0aW9uSGVhZGVyKFwiQXBwZXRpemVyc1wiKTtcclxuXHJcbiAgLy8gd3JhcCBtZW51IGl0ZW1zIHRvZ2V0aGVyIGluIGEgZGl2IGZvciBlYXNpZXIgc3R5bGluZ1xyXG4gIGNvbnN0IGFwcGV0aXplcldyYXBwZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwiYXBwZXRpemVyV3JhcHBlclwiKTtcclxuXHJcbiAgYXBwZXRpemVyV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiU2FsbW9uIEJsaW5pXCIsIFwiYXBwZXRpemVyMVwiLCBhcHAxU2FsbW9uQmxpbmksIDkuOTkpXHJcbiAgKTtcclxuICBhcHBldGl6ZXJXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJTcGluYWNoIFB1ZmZzXCIsIFwiYXBwZXRpemVyMlwiLCBhcHAyU3BpbmFjaFB1ZmYsIDguOTkpXHJcbiAgKTtcclxuXHJcbiAgYXBwZXRpemVyQ29udGVudC5hcHBlbmRDaGlsZChhcHBldGl6ZXJXcmFwcGVyKTtcclxuXHJcbiAgcmV0dXJuIGFwcGV0aXplckNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1haW5zKCkge1xyXG4gIGNvbnN0IG1haW5zQ29udGVudCA9IGNyZWF0ZU1lbnVTZWN0aW9uSGVhZGVyKFwiTWFpbnNcIik7XHJcbiAgY29uc3QgbWFpbnNXcmFwcGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcIm1haW5zV3JhcHBlclwiKTtcclxuXHJcbiAgbWFpbnNXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJCZWVmIFN0ZXdcIiwgXCJtYWluMVwiLCBtYWluMUJlZWZTdGV3LCAxNS41NSlcclxuICApO1xyXG4gIG1haW5zV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiS2ViYWIgUGxhdHRlclwiLCBcIm1haW4yXCIsIG1haW4yS2ViYWJQbGF0dGVyLCAxMy4zNylcclxuICApO1xyXG5cclxuICBtYWluc0NvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbnNXcmFwcGVyKTtcclxuXHJcbiAgcmV0dXJuIG1haW5zQ29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzc2VydHMoKSB7XHJcbiAgY29uc3QgZGVzc2VydHNDb250ZW50ID0gY3JlYXRlTWVudVNlY3Rpb25IZWFkZXIoXCJEZXNzZXJ0c1wiKTtcclxuICBjb25zdCBkZXNzZXJ0c1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwiZGVzc2VydHNXcmFwcGVyXCIpO1xyXG5cclxuICBkZXNzZXJ0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIk9yZW8gUGFyZmFpdFwiLCBcImRlc3NlcnQxXCIsIGRlc3NlcnQxT3Jlb1BhcmZhaXQsIDMuNSlcclxuICApO1xyXG4gIGRlc3NlcnRzV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTWFjYXJvbnNcIiwgXCJkZXNzZXJ0MlwiLCBkZXNzZXJ0Mk1hY2Fyb25zLCA5MDAxKVxyXG4gICk7XHJcblxyXG4gIGRlc3NlcnRzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0c1dyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gZGVzc2VydHNDb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGVyKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXBwZXRpemVycygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5zKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydHMoKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9