import "./style.css";
import Splash from "./food-splash.jpg";
import tab1, { createElementWithId, importImage } from "./home";
import menu from "./menu";
import contactPage from "./contacts";

function createTabButtons() {
  const homeButton = createElementWithId("button", "homeButton");
  homeButton.textContent = "Home";
  document.body.appendChild(homeButton);

  const menuButton = createElementWithId("button", "menuButton");
  menuButton.textContent = "Menu";
  document.body.appendChild(menuButton);

  const contactButton = createElementWithId("button", "contactButton");
  contactButton.textContent = "Contact Us";
  document.body.appendChild(contactButton);
}

document.body.appendChild(importImage(Splash));

const title = createElementWithId("h1", "title");
title.textContent = "Farm2Table";
document.body.appendChild(title);

createTabButtons();

document.body.appendChild(createElementWithId("div", "content"));

tab1();
menu();
contactPage();
