
function setupImageOpacity() {
    const img = new Image();
    img.src = 'img/CVImage1.jpeg';
    img.id ='CVImage1';
    img.addEventListener('mouseover', () => img.style.opacity = '0.8');
    img.addEventListener('mouseout', () => img.style.opacity = '1');
    document.getElementById('appendPicture').appendChild(img);
}

let playModeInterval; // Holder styr på intervallet
let isPlayModeActive = false; // Holder styr på, om play mode er aktiv

function setupPlayMode() {
    const randomColorsBtn = document.createElement('button');
    randomColorsBtn.textContent = 'Play Mode';
    randomColorsBtn.addEventListener('click', function() {
        if (isPlayModeActive) {
            window.location.reload();
        } else {
            startPlayMode();
        }
    });
    document.body.insertBefore(randomColorsBtn, document.body.firstChild.nextSibling);
}
function startPlayMode() {
    applyRandomColors(); // Anvend en gang med det samme
    playModeInterval = setInterval(applyRandomColors, 100); // Skifter farver hvert sekund
    isPlayModeActive = true;
}



function applyRandomColors() {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const elementsToChange = ['body', 'h1', 'h2', 'p', 'a', 'button']; // Opdater selektoren efter behov
    elementsToChange.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.color = getRandomColor();
            el.style.backgroundColor = getRandomColor();
        });
    });

}

function setupReturnButton() {
    const returnbutton = document.createElement("button");
    returnbutton.textContent = 'Return';
    returnbutton.addEventListener('click', function (){
        window.history.back();
    });
    document.body.insertBefore(returnbutton, document.body.firstChild);
}


document.addEventListener('DOMContentLoaded', function() {
    setupImageOpacity();
    setupPlayMode();
    setupReturnButton();
});