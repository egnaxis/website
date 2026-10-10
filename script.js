const textElement = document.getElementById("interactive-text");
// Oštar, fokusiran i muški opis poslovanja
const phrasing = "Developing games, core cross-platform utilities, and mobile ecosystems.";
let index = 0;

function typeWriter() {
    if (index < phrasing.length) {
        textElement.innerHTML += phrasing.charAt(index);
        index++;
        setTimeout(typeWriter, 35 + Math.random() * 25);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 800);
};
