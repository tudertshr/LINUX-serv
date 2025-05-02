// Révélation des explications au clic
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const desc = this.nextElementSibling;
      if (desc.style.display === "block") {
        desc.style.display = "none";
        this.textContent = "Voir explication";
      } else {
        desc.style.display = "block";
        this.textContent = "Masquer";
      }
    });
  });
});


// Fonction qui met à jour la barre de progression selon le défilement
window.onscroll = function() {
  var scrollPosition = window.scrollY; // position du scroll vertical
  var documentHeight = document.documentElement.scrollHeight - window.innerHeight; // hauteur totale du document
  var scrollPercentage = (scrollPosition / documentHeight) * 100; // pourcentage du défilement

  // Mise à jour de la hauteur de la barre de progression
  document.querySelector('.progress-bar').style.height = scrollPercentage + '%';
};

