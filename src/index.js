import "./style.css";
import Splash from "./food-splash.jpg";
import home, { createElementWithId, importImage } from "./home";
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

// function refreshContent(tab) {
//   const content = document.getElementById("content");
// }
function tabSwitching() {
  const content = document.getElementById("content");
  // const buttons = document.querySelectorAll("#buttonWrapper button");

  document.getElementById("homeButton").addEventListener("click", () => {
    console.log("test");
    content.textContent = "";
    home();
  });

  document.getElementById("menuButton").addEventListener("click", () => {
    console.log("test");
    content.textContent = "";
    menu();
  });

  // TODO change contactpage() to have the same naming scheme
  document.getElementById("contactButton").addEventListener("click", () => {
    console.log("test");
    content.textContent = "";
    contactPage();
  });
}

document.body.appendChild(importImage(Splash));

const title = createElementWithId("h1", "title");
title.textContent = "Farm2Table";
document.body.appendChild(title);

document.body.appendChild(createTabButtons());

document.body.appendChild(createElementWithId("div", "content"));

home();
menu();
contactPage();

tabSwitching();
