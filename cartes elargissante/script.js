// On selectionne toutes les cartes 
const cards = document.querySelectorAll('.card');

// Pour chaque carte, on écoute le clic
cards.forEach(function(card) {
    card.addEventListener('click', function() {
//retirer active de toutes les cartes
cards.forEach(function(c){
    c.classList.remove('active');
});
// ajouter active à la carte cliquée
card.classList.add('active');
    });
});

//End Project 1