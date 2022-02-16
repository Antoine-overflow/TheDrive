import {Rectangle, Ellipse, Triangle} from 'interface.js';

let canvas = document.getElementById("canvas");
let form = document.getElementById("form");

canvas.addEventListener("click", dessineForme);

function dessineForme(evt) {
    
    // Coords
    let {top, left} = canvas.getBoundingClientRect();
    let x = evt.clientX - left;
    let y = evt.clientY - top;

    // quelle forme ?
    let typeForme = form.elements['forme'].value;

    let forme;
    if (typeForme === 'rectangle') {
        forme = new Rectangle(x, y);
    }
    if (typeForme === 'ellipse') {
        forme = new Ellipse(x, y);

    }
    if (typeForme === 'triangle') {
        forme = new Triangle(x, y);
    }
    forme.draw();
}