var menuBurger = document.querySelector(".burger input");
var navbar = document.querySelector("nav ul");

menuBurger.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});

document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('#about .skill');

    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
