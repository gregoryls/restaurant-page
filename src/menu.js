import { createElementWithId, importImage } from "./tab1";
import app1Stew from "./app1Stew.jpg";

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
  const appetizer1Text = createElementWithId("p");
  appetizer1Text.textContent = "Beef Stew";
  appetizer1.appendChild(appetizer1Text);
  // TODO change this to a real app not stew...
  appetizer1.appendChild(importImage(app1Stew));
  appetizerContent.appendChild(appetizer1);

  return appetizerContent;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
}
