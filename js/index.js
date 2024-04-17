
let contactPopupOpen = false; // Variabel til at holde styr på, om popup'en er åben

function openContactPopup() {
    if (!contactPopupOpen) { // Kontroller om popup'en allerede er åben
        // Opret et nyt element for popup-vinduet
        const contactPopup = document.createElement("div");
        contactPopup.classList.add("contact-popup");
        contactPopup.innerHTML = `
            <div class="popup-content">
            <span class="close" onclick="closeContactPopup()">&times;</span>
            <h2>Contact Information</h2>
            <p>Name: Marcus Frørup Nielsen</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
        </div>
        `;

        // Tilføj popup-vinduet til body-elementet
        document.body.appendChild(contactPopup);

        // Opdater variablen for at indikere, at popup'en er åben
        contactPopupOpen = true;
    }
}

function closeContactPopup() {
    const contactPopup = document.querySelector(".contact-popup");
    if (contactPopup) {
        // Fjern popup-vinduet fra body-elementet
        contactPopup.remove();

        // Opdater variablen for at indikere, at popup'en er lukket
        contactPopupOpen = false;
    }
}
