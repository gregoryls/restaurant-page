export function createElementWithId(element, id) {
  const elem = document.createElement(element);
  elem.id = id;
  return elem;
}

export default function tab1() {
  console.log("tab1 test");
}
