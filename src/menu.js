import { createElementWithId } from "./tab1";

function menuHeader() {
  const headerWrap = createElementWithId("div", "menuHeader");

  const header = createElementWithId("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);

  return headerWrap;
}

function appetizers() {
  const appetizerContent = createElementWithId("section", "appetizerContent");

  const appetizerHeader = createElementWithId("h3", "appetizerHeader");
  appetizerHeader.textContent = "Appetizers";
  appetizerContent.appendChild(appetizerHeader);

  const appetizer1 = createElementWithId("div", "appetizer1");

  return appetizerContent;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
}
