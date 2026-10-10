// Menu repliable sur téléphone, et année du pied de page
document.addEventListener("DOMContentLoaded", function () {
  var bouton = document.querySelector(".bouton-menu");
  var menu = document.getElementById("menu");
  if (bouton && menu) {
    bouton.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("ouvert");
      bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
      bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });
  }
  var annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();
});
