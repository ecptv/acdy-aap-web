document.addEventListener("DOMContentLoaded", function() {
  // Simulăm o întârziere de 2 secunde pentru a demonstra pagina de încărcare
  setTimeout(function() {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }, 2000);
});
