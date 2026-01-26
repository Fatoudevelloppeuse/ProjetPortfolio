// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", () => {

  // Graphique de progression (Chart.js)
  const ctx = document.getElementById('progressChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript'],
      datasets: [{
        label: 'Niveau (%)',
        data: [70, 60, 40], // tu peux changer les valeurs
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // Message quand on envoie le formulaire
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // empêche le rechargement

    alert("Merci pour votre message ! Je vous répondrai bientôt 😊");

    form.reset(); // vide le formulaire
  });

});
