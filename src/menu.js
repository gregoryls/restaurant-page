import { createElementWithId, importImage } from "./tab1";
import app1SalmonBlini from "./app1SalmonBlini.jpg";
import app2SpinachPuff from "./app2SpinachPuff.jpg";

function createMenuHeader(type) {
  const content = createElementWithId("section", `content${type}`);
  content.classList.add("menuItems");
  const header = createElementWithId("h3", `header${type}`);
  content.appendChild(header);

  return content;
}

function createMenuItem(name, id, source) {
  const item = createElementWithId("div", `${id}`);
  const itemText = createElementWithId("p");
  itemText.textContent = `${name}`;
  item.appendChild(itemText);
  item.appendChild(importImage(source));

  return item;
}

function menuHeader() {
  const headerWrap = createElementWithId("div", "menuHeader");

  const header = createElementWithId("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);

  return headerWrap;
}

function appetizers() {
  // TODO look at making the header info a function as well
  // const appetizerContent = createElementWithId("section", "appetizerContent");

  // const appetizerHeader = createElementWithId("h3", "appetizerHeader");
  // appetizerHeader.textContent = "Appetizers";
  // appetizerContent.appendChild(appetizerHeader);

  const appetizerContent = createMenuHeader("Appetizers");

  appetizerContent.appendChild(
    createMenuItem("Salmon Blini", "appetizer1", app1SalmonBlini)
  );
  appetizerContent.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", app2SpinachPuff)
  );

  return appetizerContent;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
}
