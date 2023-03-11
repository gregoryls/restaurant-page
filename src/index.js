import './style.css';
import Splash from './food-splash.png';

function test() {
    console.log('helloo');
}

function img() {
    const splash = new Image();
    splash.src = Splash;

    document.body.appendChild(splash);
}

test();
img();