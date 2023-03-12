import './style.css';
import Splash from './food-splash.jpg';
import tab1 from './tab1.js';

function createElementWithId(element,id) {
    let elem = document.createElement(element);
    elem.id = id;
    return elem;
}

function img() {
    const splash = new Image();
    splash.src = Splash;

    document.body.appendChild(splash);
    tab1();
}

document.body.appendChild(createElementWithId('div','content'));
img();
