import './style.css';
import Splash from './food-splash.jpg';
import tab1 from './tab1.js';

function test() {
    console.log('helloo');
}

function img() {
    const splash = new Image();
    splash.src = Splash;

    document.body.appendChild(splash);
    tab1();
}

test();
img();
