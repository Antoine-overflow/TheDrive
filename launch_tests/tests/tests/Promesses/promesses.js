
let URLs = [
    'https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_128x128.png',
    'https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_128x128.png',
    'https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_128x128.png',
    'https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_128x128.png'
];

let imgSize = 128;

function combineImages(URLs) {

    let canvas = document.createElement('canvas');
    canvas.classList.add('dessin');
    canvas.width = canvas.height = 400;

    let ctx = canvas.getContext('2d');

    let promises = URLs.map(url => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.src = url;
            image.crossOrigin = '';
    
            image.addEventListener('load', () => {
                resolve(image);
            });
        });
    });

    return Promise.all(promises).then(imgs => {

        for (let img of imgs) {

            let x = Math.random() * (400 - imgSize);
            let y = Math.random() * (400 - imgSize);
            ctx.drawImage(img, x, y, imgSize, imgSize);
        }
        return canvas.toDataURL();
    });
}


combineImages(URLs).then(img => {
    document.body.style.background = `url(${img})`;
})