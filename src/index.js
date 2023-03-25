import "./style.css";
import Splash from "./food-splash.jpg";
import tab1, { createElementWithId, importImage } from "./tab1";
import menu from "./menu";
import contactPage from "./contacts";

document.body.appendChild(importImage(Splash));

const title = createElementWithId("h1", "title");
title.textContent = "Farm2Table";
document.body.appendChild(title);

document.body.appendChild(createElementWithId("div", "content"));

tab1();
menu();
contactPage();
