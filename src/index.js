import "./style.css";
import Splash from "./food-splash.jpg";
import tab1, { createElementWithId, importImage } from "./home";
import menu from "./menu";
import contactPage from "./contacts";

function createTabButtons() {
  const buttonWrapper = createElementWithId("div", "buttonWrapper");

  const homeButton = createElementWithId("button", "homeButton");
  homeButton.textContent = "Home";
  buttonWrapper.appendChild(homeButton);

  const menuButton = createElementWithId("button", "menuButton");
  menuButton.textContent = "Menu";
  buttonWrapper.appendChild(menuButton);

  const contactButton = createElementWithId("button", "contactButton");
  contactButton.textContent = "Contact Us";
  buttonWrapper.appendChild(contactButton);

  return buttonWrapper;
}

function tabSwitching() {
  const buttons = document.querySelectorAll();
}

document.body.appendChild(importImage(Splash));

const title = createElementWithId("h1", "title");
title.textContent = "Farm2Table";
document.body.appendChild(title);

document.body.appendChild(createTabButtons());

document.body.appendChild(createElementWithId("div", "content"));

tab1();
menu();
contactPage();
