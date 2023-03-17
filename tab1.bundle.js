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
  !*** ./src/tab1.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementWithId": () => (/* binding */ createElementWithId),
/* harmony export */   "default": () => (/* binding */ tab1)
/* harmony export */ });
function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiMS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJZChlbGVtZW50LCBpZCkge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZWxlbTtcclxuICBlbGVtLmlkID0gaWQ7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuLy8gVE9ETyBwdXQgcmV2aWV3IGluc2lkZSBhIHAgcHJvYmFibHlcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJldmlldygpIHtcclxuICBjb25zdCByZXZpZXcgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwicmV2aWV3XCIpO1xyXG4gIHJldmlldy50ZXh0Q29udGVudCA9XHJcbiAgICBcIkkgcmVjZW50bHkgaGFkIHRoZSBwbGVhc3VyZSBvZiBkaW5pbmcgYXQgYSBmYXJtIHRvIHRhYmxlIHJlc3RhdXJhbnQsIGFuZCBJIG11c3Qgc2F5LCBpdCB3YXMgYW4gb3V0c3RhbmRpbmcgZXhwZXJpZW5jZS4gRnJvbSB0aGUgbW9tZW50IEkgd2Fsa2VkIGluLCB0aGUgYXRtb3NwaGVyZSB3YXMgd2FybSBhbmQgaW52aXRpbmcsIHdpdGggYSBjaGFybWluZyBydXN0aWMgZGVjb3IgYW5kIGEgY296eSBmZWVsLiBUaGUgbWVudSB3YXMgZnVsbCBvZiBmcmVzaCwgbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzLCBhbmQgZWFjaCBkaXNoIHdhcyBwcmVwYXJlZCB3aXRoIHNraWxsIGFuZCBjYXJlLiAtSm9obiBFYXRlclwiO1xyXG4gIHJldHVybiByZXZpZXc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gIGNvbnN0IHdlZWtkYXlzID0gW1xyXG4gICAgXCJNb25kYXlcIixcclxuICAgIFwiVHVlc2RheVwiLFxyXG4gICAgXCJXZWRuZXNkYXlcIixcclxuICAgIFwiVGh1cnNkYXlcIixcclxuICAgIFwiRnJpZGF5XCIsXHJcbiAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBcIlN1bmRheVwiLFxyXG4gIF07XHJcbiAgY29uc3QgaG91cnMgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwiaG91cnNcIik7XHJcblxyXG4gIGNvbnN0IGhvdXJzSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgyXCIpO1xyXG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcclxuXHJcbiAgY29uc3QgaG91cnNMaXN0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInVsXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwibGlcIik7XHJcbiAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrZGF5c1tpXX06IDEyUE0gLSA5UE1gO1xyXG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgfVxyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XHJcbiAgcmV0dXJuIGhvdXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcclxuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBcIjEyMyBGYWtlIFN0LiBTcHJpbmdmaWVsZCwgSWwgMTIzNDVcIjtcclxuICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJsb2NhdGlvblwiKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaDJcIik7XHJcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvblN0cmluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIpO1xyXG4gIGxvY2F0aW9uU3RyaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhO1xyXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uU3RyaW5nKTtcclxuXHJcbiAgcmV0dXJuIGxvY2F0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWIxKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==