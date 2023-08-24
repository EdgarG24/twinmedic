// script.js
const slogans = [
    "¡Cuidamos tu salud y bienestar!",
    "Expertos en equipos médicos de calidad",
    "Soluciones médicas a tu alcance"
];

const sloganElement = document.querySelector('.slogan h2');
let currentSloganIndex = 0;

function changeSlogan() {
    sloganElement.textContent = slogans[currentSloganIndex];
    currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
}

changeSlogan(); // Cambiar el eslogan inicialmente
setInterval(changeSlogan, 4000); // Cambiar el eslogan cada 4 segundos
