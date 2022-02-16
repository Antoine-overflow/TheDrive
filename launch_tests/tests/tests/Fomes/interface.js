
import {canvas} from 'main.js';


// Classe Coordonnee
class Coordonnee {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

// Classe Taille
class Taille {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
};

// Classe Couleur
class Couleur {
    constructor(r, v, b) {
        this.r = r;
        this.v = v;
        this.b = b;
    }
    getRVBString() {
        return "rgb(" + this.r + "," + this.v + "," + this.b + ")";
    }
};

// Classe Forme
class Forme {
    constructor(x, y) {
        this.coordonnee = new Coordonnee(x, y);

        let l = this.getRandomArbitrary(20, 100);
        let h = this.getRandomArbitrary(20, 100);
        this.taille = new Taille(l, h);
        
        let r = this.getRandomArbitrary(0, 255);
        let v = this.getRandomArbitrary(0, 255);
        let b = this.getRandomArbitrary(0, 255);
        this.couleur = new Couleur(r, v, b);

        this.el = document.createElement('div');
    }
    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    draw() {
        this.el.style.position = 'absolute';
        this.el.style.width = this.taille.largeur + 'px';
        this.el.style.height = this.taille.hauteur + 'px';
        this.el.style.background = this.couleur.getRVBString();

        let deg = this.getRandomArbitrary(0, 180);
        this.el.style.transform = "translate(" + this.coordonnee.x + "px," + this.coordonnee.y + "px) rotate("+deg+"deg)";

        canvas.appendChild(this.el);
        //this.el.addEventListener(this.delete);
    }
    delete(evt) {
        evt.preventDefault();
    }
};

// Classe Rectangle
class Rectangle extends Forme {
    constructor(x, y) {
        super(x, y);
    }
};

// Classe Ellipse
class Ellipse extends Forme {
    constructor(x, y) {
        super(x, y);
    }
    draw() {
        this.el.style.borderRadius = '50%';
        super.draw();
    }
};

// Classe Triangle
class Triangle extends Rectangle {
    constructor(x, y) {
        super(x, y);
    }
    draw() {
        this.el.innerHTML = `
        <svg viewBox="0 0 100 100" fill="${this.couleur.getRVBString()}" width="100%" height="100%" preserveAspectRatio="none">
            <polygon points="50,0 100,100 0,100">
        </svg>
        `;
        super.draw();
        this.el.style.background = 'none';
        this.el.style.pointerEvents = 'none';
    }
};


