
document.addEventListener('DOMContentLoaded', function() {
    setupReturnButton();
});

function setupReturnButton() {
    const returnbutton = document.createElement("button");
    returnbutton.textContent = 'Return';
    returnbutton.addEventListener('click', function (){
        window.history.back();
    });
    document.body.insertBefore(returnbutton, document.body.firstChild);
}
