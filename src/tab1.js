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
  // TODO put hours inside a probabably h2 header
  hours.textContent = "Hours";
  const hoursList = createElementWithId("ul");
  for (let i = 0; i < 7; i += 1) {
    const day = createElementWithId("li");
    hoursList.appendChild(day);
  }
  hours.appendChild(hoursList);
  return hours;
}

export default function tab1() {
  const content = document.getElementById("content");
  content.appendChild(createReview());
  content.appendChild(createHours());
}
