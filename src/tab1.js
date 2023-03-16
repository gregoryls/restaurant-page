export function createElementWithId(element, id) {
  const elem = document.createElement(element);
  elem.id = id;
  return elem;
}

function createReview() {
  const review = createElementWithId("div", "review");
  review.textContent = "test review";
  return review;
}

export default function tab1() {
  const content = document.getElementById("content");
  content.appendChild(createReview());
}
