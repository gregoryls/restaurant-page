import "./style.css";
import Splash from "./food-splash.jpg";
import tab1, { createElementWithId, importImage } from "./tab1";
import menu from "./menu";
import contactPage from "./contacts";

document.body.appendChild(importImage(Splash));
document.body.appendChild(createElementWithId("div", "content"));

tab1();
menu();
contactPage();
