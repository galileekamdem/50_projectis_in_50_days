// ============================================================
// ROTATING NAVIGATION — script.js
// ============================================================

// 1. On sélectionne les éléments dont on a besoin dans le HTML
const btnMenu = document.getElementById('btnMenu');
const body = document.body;
const conteneur = document.querySelector('.conteneur');


// 2. Clic sur le bouton hamburger → ouvre/ferme le menu
btnMenu.addEventListener('click', function() {

  // classList.toggle('ouvert') :
  // - Ajoute la classe "ouvert" si elle est absente
  // - Enlève la classe "ouvert" si elle est présente
  body.classList.toggle('ouvert');

});


// 3. Clic sur le contenu → ferme le menu
conteneur.addEventListener('click', function() {

  if (body.classList.contains('ouvert')) {
    body.classList.remove('ouvert');
  }

});