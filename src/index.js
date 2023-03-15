import './style.css';
import Splash from './food-splash.jpg';
import tab1 from './tab1';

function createElementWithId(element, id) {
  const elem = document.createElement(element);
  elem.id = id;
  return elem;
}

function importImage(source) {
  const temp = new Image();
  temp.src = source;

  return temp;
}

document.body.appendChild(createElementWithId('div', 'content'));

document.body.appendChild(importImage(Splash));
tab1();
