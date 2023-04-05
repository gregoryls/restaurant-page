/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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
  const review = createElementWithId("div", "review");
  const reviewText = createElementWithId("p", "reviewText");
  reviewText.textContent =
    "I recently had the pleasure of dining at a farm to table restaurant, and I must say, it was an outstanding experience. From the moment I walked in, the atmosphere was warm and inviting, with a charming rustic decor and a cozy feel. The menu was full of fresh, locally-sourced ingredients, and each dish was prepared with skill and care.";
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgaWYgKGlkID09PSB1bmRlZmluZWQpIHJldHVybiBlbGVtO1xyXG4gIGVsZW0uaWQgPSBpZDtcclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEltYWdlKHNvdXJjZSkge1xyXG4gIGNvbnN0IHRlbXAgPSBuZXcgSW1hZ2UoKTtcclxuICB0ZW1wLnNyYyA9IHNvdXJjZTtcclxuXHJcbiAgcmV0dXJuIHRlbXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJldmlldygpIHtcclxuICBjb25zdCByZXZpZXcgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwicmV2aWV3XCIpO1xyXG4gIGNvbnN0IHJldmlld1RleHQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiLCBcInJldmlld1RleHRcIik7XHJcbiAgcmV2aWV3VGV4dC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkkgcmVjZW50bHkgaGFkIHRoZSBwbGVhc3VyZSBvZiBkaW5pbmcgYXQgYSBmYXJtIHRvIHRhYmxlIHJlc3RhdXJhbnQsIGFuZCBJIG11c3Qgc2F5LCBpdCB3YXMgYW4gb3V0c3RhbmRpbmcgZXhwZXJpZW5jZS4gRnJvbSB0aGUgbW9tZW50IEkgd2Fsa2VkIGluLCB0aGUgYXRtb3NwaGVyZSB3YXMgd2FybSBhbmQgaW52aXRpbmcsIHdpdGggYSBjaGFybWluZyBydXN0aWMgZGVjb3IgYW5kIGEgY296eSBmZWVsLiBUaGUgbWVudSB3YXMgZnVsbCBvZiBmcmVzaCwgbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzLCBhbmQgZWFjaCBkaXNoIHdhcyBwcmVwYXJlZCB3aXRoIHNraWxsIGFuZCBjYXJlLlwiO1xyXG4gIGNvbnN0IHJldmlld05hbWUgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiLCBcInJldmlld05hbWVcIik7XHJcbiAgcmV2aWV3TmFtZS50ZXh0Q29udGVudCA9IFwiLSBKb2huIEVhdGVyXCI7XHJcbiAgcmV2aWV3LmFwcGVuZENoaWxkKHJldmlld1RleHQpO1xyXG4gIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdOYW1lKTtcclxuICByZXR1cm4gcmV2aWV3O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcclxuICBjb25zdCB3ZWVrZGF5cyA9IFtcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXCJTdW5kYXlcIixcclxuICBdO1xyXG4gIGNvbnN0IGhvdXJzID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImhvdXJzXCIpO1xyXG5cclxuICBjb25zdCBob3Vyc0hlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMlwiKTtcclxuICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XHJcblxyXG4gIGNvbnN0IGhvdXJzTGlzdCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJ1bFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImxpXCIpO1xyXG4gICAgZGF5LnRleHRDb250ZW50ID0gYCR7d2Vla2RheXNbaV19OiAxMlBNIC0gOVBNYDtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChkYXkpO1xyXG4gIH1cclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xyXG4gIHJldHVybiBob3VycztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gXCIxMjMgRmFrZSBTdC4gU3ByaW5nZmllbGQsIElsIDEyMzQ1XCI7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwibG9jYXRpb25cIik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgyXCIpO1xyXG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25TdHJpbmcgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICBsb2NhdGlvblN0cmluZy50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YTtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblN0cmluZyk7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUmV2aWV3KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=