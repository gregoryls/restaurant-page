import { createElementWithId, importImage } from "./tab1";
import app1SalmonBlini from "./app1SalmonBlini.jpg";
import app2SpinachPuff from "./app2SpinachPuff.jpg";
import main1BeefStew from "./main1BeefStew.jpg";
import main2KebabPlatter from "./main2KebabPlatter.jpg";
import dessert1OreoParfait from "./dessert1OreoParfait.jpg";
import dessert2Macarons from "./dessert2Macarons.jpg";

function createMenuSectionHeader(type) {
  const content = createElementWithId("section", `content${type}`);
  content.classList.add("menuItems");
  const header = createElementWithId("h3", `header${type}`);
  header.textContent = type;
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
  const appetizerContent = createMenuSectionHeader("Appetizers");

  appetizerContent.appendChild(
    createMenuItem("Salmon Blini", "appetizer1", app1SalmonBlini)
  );
  appetizerContent.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", app2SpinachPuff)
  );

  return appetizerContent;
}

function mains() {
  const mainsContent = createMenuSectionHeader("Mains");

  mainsContent.appendChild(createMenuItem("Beef Stew", "main1", main1BeefStew));
  mainsContent.appendChild(
    createMenuItem("Kebab Platter", "main2", main2KebabPlatter)
  );

  return mainsContent;
}

function desserts() {
  const dessertsContent = createMenuSectionHeader("Desserts");

  dessertsContent.appendChild(
    createMenuItem("Oreo Parfait", "dessert1", dessert1OreoParfait)
  );
  dessertsContent.appendChild(
    createMenuItem("Macarons", "dessert2", dessert2Macarons)
  );

  return dessertsContent;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
  content.appendChild(mains());
  content.appendChild(desserts());
}
