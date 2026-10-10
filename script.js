const textElement = document.getElementById("interactive-text");
// description
const phrasing = "Developing high-performance games and desktop-mobile software architecture..";
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
