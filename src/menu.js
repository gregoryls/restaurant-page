import { createElementWithId } from "./tab1";

function menuHeader() {
  const headerWrap = createElementWithId("section", "menuHeader");
  const header = createElementWithId("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);
  return headerWrap;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
}
