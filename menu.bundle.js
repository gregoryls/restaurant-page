/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tab1.js":
/*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementWithId": () => (/* binding */ createElementWithId),
/* harmony export */   "default": () => (/* binding */ tab1),
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

function tab1() {
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
/* harmony import */ var _tab1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1 */ "./src/tab1.js");
/* harmony import */ var _app1SalmonBlini_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app1SalmonBlini.jpg */ "./src/app1SalmonBlini.jpg");
/* harmony import */ var _app2SpinachPuff_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app2SpinachPuff.jpg */ "./src/app2SpinachPuff.jpg");




function createMenuItem(name, id, source) {
  const item = (0,_tab1__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", `${id}`);
  const itemText = (0,_tab1__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("p");
  itemText.textContent = `${name}`;
  item.appendChild(itemText);
  item.appendChild((0,_tab1__WEBPACK_IMPORTED_MODULE_0__.importImage)(source));

  return item;
}

function menuHeader() {
  const headerWrap = (0,_tab1__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "menuHeader");

  const header = (0,_tab1__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);

  return headerWrap;
}

function appetizers() {
  // TODO look at making the header info a function as well
  // const appetizerContent = createElementWithId("section", "appetizerContent");

  // const appetizerHeader = createElementWithId("h3", "appetizerHeader");
  // appetizerHeader.textContent = "Appetizers";
  // appetizerContent.appendChild(appetizerHeader);

  function createMenuHeader(type) {
    const content = (0,_tab1__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("section", `content${type}`);
    const header = (0,_tab1__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h3", `header${type}`);
    content.appendChild(header);

    return content;
  }
  const appetizerContent = createMenuHeader("Appetizers");

  appetizerContent.appendChild(
    createMenuItem("Salmon Blini", "appetizer1", _app1SalmonBlini_jpg__WEBPACK_IMPORTED_MODULE_1__)
  );
  appetizerContent.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", _app2SpinachPuff_jpg__WEBPACK_IMPORTED_MODULE_2__)
  );

  return appetizerContent;
}

function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMEQ7QUFDTjtBQUNBO0FBQ3BEO0FBQ0E7QUFDQSxlQUFlLDBEQUFtQixXQUFXLEdBQUc7QUFDaEQsbUJBQW1CLDBEQUFtQjtBQUN0Qyw0QkFBNEIsS0FBSztBQUNqQztBQUNBLG1CQUFtQixrREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFtQjtBQUN4QztBQUNBLGlCQUFpQiwwREFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFtQixzQkFBc0IsS0FBSztBQUNsRSxtQkFBbUIsMERBQW1CLGdCQUFnQixLQUFLO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlEQUFlO0FBQ2hFO0FBQ0E7QUFDQSxrREFBa0QsaURBQWU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiMS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsZW07XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0SW1hZ2Uoc291cmNlKSB7XHJcbiAgY29uc3QgdGVtcCA9IG5ldyBJbWFnZSgpO1xyXG4gIHRlbXAuc3JjID0gc291cmNlO1xyXG4gIC8vIHRlbXAuaWQgPSBzb3VyY2U7XHJcblxyXG4gIHJldHVybiB0ZW1wO1xyXG59XHJcbi8vIFRPRE8gcHV0IHJldmlldyBpbnNpZGUgYSBwIHByb2JhYmx5XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXZpZXcoKSB7XHJcbiAgY29uc3QgcmV2aWV3ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInJldmlld1wiKTtcclxuICByZXZpZXcudGV4dENvbnRlbnQgPVxyXG4gICAgXCJJIHJlY2VudGx5IGhhZCB0aGUgcGxlYXN1cmUgb2YgZGluaW5nIGF0IGEgZmFybSB0byB0YWJsZSByZXN0YXVyYW50LCBhbmQgSSBtdXN0IHNheSwgaXQgd2FzIGFuIG91dHN0YW5kaW5nIGV4cGVyaWVuY2UuIEZyb20gdGhlIG1vbWVudCBJIHdhbGtlZCBpbiwgdGhlIGF0bW9zcGhlcmUgd2FzIHdhcm0gYW5kIGludml0aW5nLCB3aXRoIGEgY2hhcm1pbmcgcnVzdGljIGRlY29yIGFuZCBhIGNvenkgZmVlbC4gVGhlIG1lbnUgd2FzIGZ1bGwgb2YgZnJlc2gsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cywgYW5kIGVhY2ggZGlzaCB3YXMgcHJlcGFyZWQgd2l0aCBza2lsbCBhbmQgY2FyZS4gLUpvaG4gRWF0ZXJcIjtcclxuICByZXR1cm4gcmV2aWV3O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcclxuICBjb25zdCB3ZWVrZGF5cyA9IFtcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXCJTdW5kYXlcIixcclxuICBdO1xyXG4gIGNvbnN0IGhvdXJzID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImhvdXJzXCIpO1xyXG5cclxuICBjb25zdCBob3Vyc0hlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XHJcblxyXG4gIGNvbnN0IGhvdXJzTGlzdCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJ1bFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImxpXCIpO1xyXG4gICAgZGF5LnRleHRDb250ZW50ID0gYCR7d2Vla2RheXNbaV19OiAxMlBNIC0gOVBNYDtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChkYXkpO1xyXG4gIH1cclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xyXG4gIHJldHVybiBob3VycztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gXCIxMjMgRmFrZSBTdC4gU3ByaW5nZmllbGQsIElsIDEyMzQ1XCI7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwibG9jYXRpb25cIik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgyXCIpO1xyXG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25TdHJpbmcgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICBsb2NhdGlvblN0cmluZy50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YTtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblN0cmluZyk7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiMSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUmV2aWV3KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aElkLCBpbXBvcnRJbWFnZSB9IGZyb20gXCIuL3RhYjFcIjtcclxuaW1wb3J0IGFwcDFTYWxtb25CbGluaSBmcm9tIFwiLi9hcHAxU2FsbW9uQmxpbmkuanBnXCI7XHJcbmltcG9ydCBhcHAyU3BpbmFjaFB1ZmYgZnJvbSBcIi4vYXBwMlNwaW5hY2hQdWZmLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgaWQsIHNvdXJjZSkge1xyXG4gIGNvbnN0IGl0ZW0gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIGAke2lkfWApO1xyXG4gIGNvbnN0IGl0ZW1UZXh0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChpbXBvcnRJbWFnZShzb3VyY2UpKTtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyV3JhcCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJtZW51SGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgaGVhZGVyV3JhcC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyV3JhcDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZXRpemVycygpIHtcclxuICAvLyBUT0RPIGxvb2sgYXQgbWFraW5nIHRoZSBoZWFkZXIgaW5mbyBhIGZ1bmN0aW9uIGFzIHdlbGxcclxuICAvLyBjb25zdCBhcHBldGl6ZXJDb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgXCJhcHBldGl6ZXJDb250ZW50XCIpO1xyXG5cclxuICAvLyBjb25zdCBhcHBldGl6ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDNcIiwgXCJhcHBldGl6ZXJIZWFkZXJcIik7XHJcbiAgLy8gYXBwZXRpemVySGVhZGVyLnRleHRDb250ZW50ID0gXCJBcHBldGl6ZXJzXCI7XHJcbiAgLy8gYXBwZXRpemVyQ29udGVudC5hcHBlbmRDaGlsZChhcHBldGl6ZXJIZWFkZXIpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVNZW51SGVhZGVyKHR5cGUpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwic2VjdGlvblwiLCBgY29udGVudCR7dHlwZX1gKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoM1wiLCBgaGVhZGVyJHt0eXBlfWApO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBjb25zdCBhcHBldGl6ZXJDb250ZW50ID0gY3JlYXRlTWVudUhlYWRlcihcIkFwcGV0aXplcnNcIik7XHJcblxyXG4gIGFwcGV0aXplckNvbnRlbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIlNhbG1vbiBCbGluaVwiLCBcImFwcGV0aXplcjFcIiwgYXBwMVNhbG1vbkJsaW5pKVxyXG4gICk7XHJcbiAgYXBwZXRpemVyQ29udGVudC5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiU3BpbmFjaCBQdWZmc1wiLCBcImFwcGV0aXplcjJcIiwgYXBwMlNwaW5hY2hQdWZmKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBhcHBldGl6ZXJDb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGVyKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXBwZXRpemVycygpKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=