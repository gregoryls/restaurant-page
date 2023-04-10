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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBLE1BQU07QUFDTiwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0Esc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsZW07XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0SW1hZ2Uoc291cmNlKSB7XHJcbiAgY29uc3QgdGVtcCA9IG5ldyBJbWFnZSgpO1xyXG4gIHRlbXAuc3JjID0gc291cmNlO1xyXG5cclxuICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KCkge1xyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgd2l0aCBhIHJlc3RhdXJhbnQgcmV2aWV3IGZvbGxvd2VkIGJ5IHRoZSBuYW1lIG9mIHRoZSByZXZpZXdlclxyXG4gIGNvbnN0IGN1c3RvbWVyUmV2aWV3ID1cclxuICAgIFwiSSByZWNlbnRseSBoYWQgdGhlIHBsZWFzdXJlIG9mIGRpbmluZyBhdCBhIGZhcm0gdG8gdGFibGUgcmVzdGF1cmFudCwgYW5kIEkgbXVzdCBzYXksIGl0IHdhcyBhbiBvdXRzdGFuZGluZyBleHBlcmllbmNlLiBGcm9tIHRoZSBtb21lbnQgSSB3YWxrZWQgaW4sIHRoZSBhdG1vc3BoZXJlIHdhcyB3YXJtIGFuZCBpbnZpdGluZywgd2l0aCBhIGNoYXJtaW5nIHJ1c3RpYyBkZWNvciBhbmQgYSBjb3p5IGZlZWwuIFRoZSBtZW51IHdhcyBmdWxsIG9mIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMsIGFuZCBlYWNoIGRpc2ggd2FzIHByZXBhcmVkIHdpdGggc2tpbGwgYW5kIGNhcmUuXCI7XHJcblxyXG4gIGNvbnN0IHJldmlldyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJzZWN0aW9uXCIsIFwicmV2aWV3XCIpO1xyXG4gIGNvbnN0IHJldmlld1RleHQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiLCBcInJldmlld1RleHRcIik7XHJcbiAgcmV2aWV3VGV4dC50ZXh0Q29udGVudCA9IGN1c3RvbWVyUmV2aWV3O1xyXG5cclxuICBjb25zdCByZXZpZXdOYW1lID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJyZXZpZXdOYW1lXCIpO1xyXG4gIHJldmlld05hbWUudGV4dENvbnRlbnQgPSBcIi0gSm9obiBFYXRlclwiO1xyXG4gIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdUZXh0KTtcclxuICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3TmFtZSk7XHJcbiAgcmV0dXJuIHJldmlldztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgLy8gY3JlYXRlcyBkaXYgZm9yIHRoZSBvcGVyYXRpbmcgaG91cnNcclxuICBjb25zdCB3ZWVrZGF5cyA9IFtcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXCJTdW5kYXlcIixcclxuICBdO1xyXG4gIGNvbnN0IGhvdXJzID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgXCJob3Vyc1wiKTtcclxuXHJcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xyXG5cclxuICBjb25zdCBob3Vyc0xpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwidWxcIik7XHJcbiAgLy8gdXNlIGlmIHN0YXRlbWVudHMgdG8gc2VsZWN0IGRheXMgZm9yIGRpZmZlcmVudCB0aGFuIG5vcm1hbCBob3Vyc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwibGlcIik7XHJcbiAgICBpZiAoaSA9PT0gNSB8fCBpID09PSAyKSB7XHJcbiAgICAgIGRheS50ZXh0Q29udGVudCA9IGAke3dlZWtkYXlzW2ldfTogQ2xvc2VkYDtcclxuICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5c1tpXX06IDEyUE0gLSA5UE1gO1xyXG4gICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIH1cclxuICB9XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuICByZXR1cm4gaG91cnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFwiMTIzIEZha2UgU3QuIFNwcmluZ2ZpZWxkLCBJbCAxMjM0NVwiO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgXCJsb2NhdGlvblwiKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvblN0cmluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIpO1xyXG4gIGxvY2F0aW9uU3RyaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhO1xyXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uU3RyaW5nKTtcclxuXHJcbiAgcmV0dXJuIGxvY2F0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhJZCB9IGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3QobmFtZSwgcm9sZSwgcGhvbmUsIGVtYWlsKSB7XHJcbiAgLy8gY3JlYXRlcyB0aGUgZWxlbWVudHMgd2l0aCBzdXBwbGllZCBpbmZvIGZvciBhIGdpdmVuIGNvbnRhY3RcclxuXHJcbiAgY29uc3QgY29udGFjdEluZm8gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICBjb25zdCBjb250YWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoM1wiKTtcclxuICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xyXG5cclxuICBjb25zdCByb2xlVGl0bGUgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICByb2xlVGl0bGUudGV4dENvbnRlbnQgPSByb2xlO1xyXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHJvbGVUaXRsZSk7XHJcblxyXG4gIGNvbnN0IHBob25lTnVtYmVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIik7XHJcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBwaG9uZTtcclxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XHJcblxyXG4gIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIpO1xyXG4gIGVtYWlsQWRkcmVzcy50ZXh0Q29udGVudCA9IGVtYWlsO1xyXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcyk7XHJcblxyXG4gIHJldHVybiBjb250YWN0SW5mbztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKFxyXG4gICAgY29udGFjdChcIkphbmVcIiwgXCJPd25lclwiLCBcIjExMS0yMjItMzMzM1wiLCBcIm93bmVyQHJlc3RhdXJhbnQuY29tXCIpXHJcbiAgKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKFxyXG4gICAgY29udGFjdChcIkpvaG5cIiwgXCJDaGVmXCIsIFwiODg4LTc3Ny02NjY2XCIsIFwiY2hlZkByZXN0YXVyYW50LmNvbVwiKVxyXG4gICk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChcclxuICAgIGNvbnRhY3QoXCJTYW1cIiwgXCJXYWl0ZXJcIiwgXCI0NDQtNTU1LTY2NjZcIiwgXCJ3YWl0ZXJAcmVzdGF1cmFudC5jb21cIilcclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==