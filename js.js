document.addEventListener("DOMContentLoaded", function() {
  // Simulăm o întârziere de 2 secunde pentru a demonstra pagina de încărcare
  setTimeout(function() {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }, 2000);

    const slides = document.querySelectorAll('.slide');
    const arrows = document.querySelectorAll('.arrow');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        updateIndicators(index);
    }

    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.classList.contains('prev')) {
                currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            } else {
                currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            }
            showSlide(currentIndex);
        });
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    // Automatically switch slides every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 5000);
});



// Adaugă un eveniment de click la buton
       document.getElementById("redirectButton").addEventListener("click", function() {
           // Redirecționează utilizatorul la o altă pagină web
           window.location.href = "https://www.alta-pagina.com";

           window.open("file:///C:/Users/Clarck/OneDrive/Рабочий%20стол/git.hub.webaap.acdy/log%20in.html", "_blank");

           document.getElementById("signInButton").addEventListener("click", function() {
                      document.getElementById("signInForm").style.display = "block";



//--------------------------------CARD SECTION--------------------------

document.getElementById("new-card-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var title = document.getElementById("card-title").value.trim(); // Elimină spațiile albe din început și sfârșit
    var description = document.getElementById("card-description").value.trim(); // Elimină spațiile albe din început și sfârșit

    if (title !== "" && description !== "") { // Verifică dacă ambele câmpuri sunt completate
        var cardHTML = `
            <div class="card">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="card-buttons">
                    <button class="like-button">Like</button>
                    <button class="comment-button">Comentarii</button>
                </div>
            </div>
        `;

        var cardsSection = document.querySelector(".cards-section");
        cardsSection.insertAdjacentHTML("beforeend", cardHTML);

        document.getElementById("card-title").value = "";
        document.getElementById("card-description").value = "";
    } else {
        alert("Te rog completează ambele câmpuri pentru a adăuga un card.");
    }
});
