const textElement = document.getElementById("interactive-text");
const phrasing = "Developing interactive frameworks & software systems.";
let index = 0;

function typeWriter() {
    if (index < phrasing.length) {
        textElement.innerHTML += phrasing.charAt(index);
        index++;
        // ms speed kb (efect)
        setTimeout(typeWriter, 40 + Math.random() * 40);
    }
}

// start efect
window.onload = () => {
    setTimeout(typeWriter, 1000);
};
