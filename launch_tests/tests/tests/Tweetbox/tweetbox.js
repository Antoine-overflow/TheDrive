
let twitter = {
    maxlength : 10,
    maxPhoto : 5,
};

let champ = document.getElementById("champ");
let restants = document.getElementById("restants");
let tweet = document.getElementById("tweet");
let photo = document.getElementById("photo");

// Récuperer le label : photo.labels[0]
// ou :
let label_photo = document.querySelector('[for=photo]');

champ.addEventListener("input", check);
photo.addEventListener("change", check);

function check(){

    // compter le nombre de caractère du texte
    var text = champ.value.length;
    var nbRestant = twitter.maxlength - text;

    // photo ?
    if(photo.checked) {
        nbRestant -= twitter.maxPhoto;
        label_photo.innerHTML = "Photo ajoutée"
    } else {
        label_photo.innerHTML = "Pas de photo"
    }

    // limite atteinte ?
    if (nbRestant < 0){
        restants.classList.add('limite');
        tweet.disabled = true; 
    } else {
        restants.classList.remove('limite');
        tweet.disabled = false; 
    }

    // maj : Afficher le total de lettre dispo
    restants.innerHTML = nbRestant;
};



// Part 2 : Liste
let liste = document.querySelectorAll("ul li");

for (let i=0; i < liste.length; i++) {

    liste[i].addEventListener("click", function(){
        console.log(i);
    });
}