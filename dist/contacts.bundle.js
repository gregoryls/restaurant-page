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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


function contact(name, role, phone, email) {
  // creates the elements with supplied info for a given contact

  // TODO check to see what happens if arg not supplied
  const contactInfo = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div");
  contactInfo.classList.add("contact");

  const contactName = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h3");
  contactName.textContent = name;
  contactInfo.appendChild(contactName);

  const roleTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("p");
  roleTitle.textContent = role;
  contactInfo.appendChild(roleTitle);

  const phoneNumber = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("p");
  phoneNumber.textContent = phone;
  contactInfo.appendChild(phoneNumber);

  const emailAddress = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("p");
  emailAddress.textContent = email;
  contactInfo.appendChild(emailAddress);

  return contactInfo;
}

function contactPage() {
  const content = document.getElementById("content");
  content.appendChild(
    contact("Jane", "Owner", "111-222-3333", "owner@restaurant.com")
  );
  content.appendChild(
    contact("John", "Chef", "888-777-6666", "chef@restaurant.com")
  );
  content.appendChild(
    contact("Sam", "Waiter", "444-555-6666", "waiter@restaurant.com")
  );
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBLE1BQU07QUFDTiwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0E7QUFDQSxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwREFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJZChlbGVtZW50LCBpZCkge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZWxlbTtcclxuICBlbGVtLmlkID0gaWQ7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRJbWFnZShzb3VyY2UpIHtcclxuICBjb25zdCB0ZW1wID0gbmV3IEltYWdlKCk7XHJcbiAgdGVtcC5zcmMgPSBzb3VyY2U7XHJcblxyXG4gIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXZpZXcoKSB7XHJcbiAgLy8gY3JlYXRlcyBhIGRpdiB3aXRoIGEgcmVzdGF1cmFudCByZXZpZXcgZm9sbG93ZWQgYnkgdGhlIG5hbWUgb2YgdGhlIHJldmlld2VyXHJcbiAgY29uc3QgY3VzdG9tZXJSZXZpZXcgPVxyXG4gICAgXCJJIHJlY2VudGx5IGhhZCB0aGUgcGxlYXN1cmUgb2YgZGluaW5nIGF0IGEgZmFybSB0byB0YWJsZSByZXN0YXVyYW50LCBhbmQgSSBtdXN0IHNheSwgaXQgd2FzIGFuIG91dHN0YW5kaW5nIGV4cGVyaWVuY2UuIEZyb20gdGhlIG1vbWVudCBJIHdhbGtlZCBpbiwgdGhlIGF0bW9zcGhlcmUgd2FzIHdhcm0gYW5kIGludml0aW5nLCB3aXRoIGEgY2hhcm1pbmcgcnVzdGljIGRlY29yIGFuZCBhIGNvenkgZmVlbC4gVGhlIG1lbnUgd2FzIGZ1bGwgb2YgZnJlc2gsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cywgYW5kIGVhY2ggZGlzaCB3YXMgcHJlcGFyZWQgd2l0aCBza2lsbCBhbmQgY2FyZS5cIjtcclxuXHJcbiAgY29uc3QgcmV2aWV3ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInJldmlld1wiKTtcclxuICBjb25zdCByZXZpZXdUZXh0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJyZXZpZXdUZXh0XCIpO1xyXG4gIHJldmlld1RleHQudGV4dENvbnRlbnQgPSBjdXN0b21lclJldmlldztcclxuXHJcbiAgY29uc3QgcmV2aWV3TmFtZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIsIFwicmV2aWV3TmFtZVwiKTtcclxuICByZXZpZXdOYW1lLnRleHRDb250ZW50ID0gXCItIEpvaG4gRWF0ZXJcIjtcclxuICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3VGV4dCk7XHJcbiAgcmV2aWV3LmFwcGVuZENoaWxkKHJldmlld05hbWUpO1xyXG4gIHJldHVybiByZXZpZXc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gIC8vIGNyZWF0ZXMgZGl2IGZvciB0aGUgb3BlcmF0aW5nIGhvdXJzXHJcbiAgY29uc3Qgd2Vla2RheXMgPSBbXHJcbiAgICBcIk1vbmRheVwiLFxyXG4gICAgXCJUdWVzZGF5XCIsXHJcbiAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgXCJUaHVyc2RheVwiLFxyXG4gICAgXCJGcmlkYXlcIixcclxuICAgIFwiU2F0dXJkYXlcIixcclxuICAgIFwiU3VuZGF5XCIsXHJcbiAgXTtcclxuICBjb25zdCBob3VycyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJob3Vyc1wiKTtcclxuXHJcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xyXG5cclxuICBjb25zdCBob3Vyc0xpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwidWxcIik7XHJcbiAgLy8gdXNlIGlmIHN0YXRlbWVudHMgdG8gc2VsZWN0IGRheXMgZm9yIGRpZmZlcmVudCB0aGFuIG5vcm1hbCBob3Vyc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwibGlcIik7XHJcbiAgICBpZiAoaSA9PT0gNSB8fCBpID09PSAyKSB7XHJcbiAgICAgIGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXlzW2ldfTogQ2xvc2VkYDtcclxuICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5c1tpXX06IDEyUE0gLSA5UE1gO1xyXG4gICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIH1cclxuICB9XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuICByZXR1cm4gaG91cnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFwiMTIzIEZha2UgU3QuIFNwcmluZ2ZpZWxkLCBJbCAxMjM0NVwiO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImxvY2F0aW9uXCIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uU3RyaW5nID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgbG9jYXRpb25TdHJpbmcudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGE7XHJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25TdHJpbmcpO1xyXG5cclxuICByZXR1cm4gbG9jYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVJldmlldygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aElkIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gY29udGFjdChuYW1lLCByb2xlLCBwaG9uZSwgZW1haWwpIHtcclxuICAvLyBjcmVhdGVzIHRoZSBlbGVtZW50cyB3aXRoIHN1cHBsaWVkIGluZm8gZm9yIGEgZ2l2ZW4gY29udGFjdFxyXG5cclxuICAvLyBUT0RPIGNoZWNrIHRvIHNlZSB3aGF0IGhhcHBlbnMgaWYgYXJnIG5vdCBzdXBwbGllZFxyXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiKTtcclxuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgY29uc3QgY29udGFjdE5hbWUgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDNcIik7XHJcbiAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcclxuXHJcbiAgY29uc3Qgcm9sZVRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgcm9sZVRpdGxlLnRleHRDb250ZW50ID0gcm9sZTtcclxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChyb2xlVGl0bGUpO1xyXG5cclxuICBjb25zdCBwaG9uZU51bWJlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIpO1xyXG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gcGhvbmU7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xyXG5cclxuICBjb25zdCBlbWFpbEFkZHJlc3MgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICBlbWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSBlbWFpbDtcclxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xyXG5cclxuICByZXR1cm4gY29udGFjdEluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChcclxuICAgIGNvbnRhY3QoXCJKYW5lXCIsIFwiT3duZXJcIiwgXCIxMTEtMjIyLTMzMzNcIiwgXCJvd25lckByZXN0YXVyYW50LmNvbVwiKVxyXG4gICk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChcclxuICAgIGNvbnRhY3QoXCJKb2huXCIsIFwiQ2hlZlwiLCBcIjg4OC03NzctNjY2NlwiLCBcImNoZWZAcmVzdGF1cmFudC5jb21cIilcclxuICApO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICBjb250YWN0KFwiU2FtXCIsIFwiV2FpdGVyXCIsIFwiNDQ0LTU1NS02NjY2XCIsIFwid2FpdGVyQHJlc3RhdXJhbnQuY29tXCIpXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=