import { createElementWithId, importImage } from "./tab1";
import app1SalmonBlini from "./app1SalmonBlini.jpg";
import app2SpinachPuff from "./app2SpinachPuff.jpg";

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

  function createMenuItem(name, id, source) {
    const item = createElementWithId("div", `${id}`);
    const itemText = createElementWithId("p");
    itemText.textContent = `${name}`;
    item.appendChild(itemText);
    item.appendChild(importImage(source));

    return item;
  }

  appetizerContent.appendChild(
    createMenuItem("Spinach Puffs", "appetizer2", app2SpinachPuff)
  );

  const appetizer1 = createElementWithId("div", "appetizer1");
  const appetizer1Text = createElementWithId("p");
  appetizer1Text.textContent = "Salmon Blini";
  appetizer1.appendChild(appetizer1Text);
  appetizer1.appendChild(importImage(app1SalmonBlini));
  appetizerContent.appendChild(appetizer1);

  return appetizerContent;
}

export default function menu() {
  const content = document.getElementById("content");
  content.appendChild(menuHeader());
  content.appendChild(appetizers());
}
