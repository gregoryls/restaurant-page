export function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}
// TODO put review inside a p probably

function createReview() {
  const review = createElementWithId("div", "review");
  review.textContent = "test review";
  return review;
}

function createHours() {
  const hours = createElementWithId("div", "hours");
  const hoursList = createElementWithId("ol");
  hours.appendChild(hoursList);
  return hours;
}

export default function tab1() {
  const content = document.getElementById("content");
  content.appendChild(createReview());
  content.appendChild(createHours());
}
