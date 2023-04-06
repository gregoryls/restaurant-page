import { createElementWithId, importImage } from "./home";
import app1SalmonBlini from "./app1SalmonBlini.jpg";
import app2SpinachPuff from "./app2SpinachPuff.jpg";
import main1BeefStew from "./main1BeefStew.jpg";
import main2KebabPlatter from "./main2KebabPlatter.jpg";
import dessert1OreoParfait from "./dessert1OreoParfait.jpg";
import dessert2Macarons from "./dessert2Macarons.jpg";

function createMenuSectionHeader(type) {
  // creates a section + header for a given type, such as Appetizers etc
  const content = createElementWithId("section", `content${type}`);
  content.classList.add("menuItems");
  const header = createElementWithId("h3", `header${type}`);
  header.textContent = type;
  content.appendChild(header);

  return content;
}

function createMenuItem(name, id, source, price) {
  // creates elements for menu item names prices and an image of the dish
  const item = createElementWithId("div", `${id}`);
  const itemText = createElementWithId("p");
  itemText.textContent = `${name} - $${price}`;
  item.appendChild(itemText);
  item.appendChild(importImage(source));

  return item;
}

function menuHeader() {
  // creates the menu title element at the top of the page
  const headerWrap = createElementWithId("div", "menuHeader");

  const header = createElementWithId("h2");
  header.textContent = "Menu";
  headerWrap.appendChild(header);

  return headerWrap;
}

function appetizers() {
  const appetizerContent = createMenuSectionHeader("Appetizers");

  // wrap menu items together in a div for easier styling
  const appetizerWrapper = createElementWithId("div", "appetizerWrapper");

  appetizerWrapper.appendChild(
    createMenuItem("Salmon Blini", "appetizer1", app1SalmonBlini, 9.99)
  );
  appetizerWrapper.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", app2SpinachPuff, 8.99)
  );

  appetizerContent.appendChild(appetizerWrapper);

  return appetizerContent;
}

function mains() {
  const mainsContent = createMenuSectionHeader("Mains");
  const mainsWrapper = createElementWithId("div", "mainsWrapper");

  mainsWrapper.appendChild(
    createMenuItem("Beef Stew", "main1", main1BeefStew, 15.55)
  );
  mainsWrapper.appendChild(
    createMenuItem("Kebab Platter", "main2", main2KebabPlatter, 13.37)
  );

  mainsContent.appendChild(mainsWrapper);

  return mainsContent;
}

function desserts() {
  const dessertsContent = createMenuSectionHeader("Desserts");
  const dessertsWrapper = createElementWithId("div", "dessertsWrapper");

  dessertsWrapper.appendChild(
    createMenuItem("Oreo Parfait", "dessert1", dessert1OreoParfait, 3.5)
  );
  dessertsWrapper.appendChild(
    createMenuItem("Macarons", "dessert2", dessert2Macarons, 9001)
  );

  dessertsContent.appendChild(dessertsWrapper);

  return dessertsContent;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
  content.appendChild(mains());
  content.appendChild(desserts());
}
