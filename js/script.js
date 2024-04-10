document.addEventListener('DOMContentLoaded', function() {
    const switchThemeBtn = document.createElement('button');
    switchThemeBtn.textContent = 'Skift Tema';
    switchThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    document.body.insertBefore(switchThemeBtn, document.body.firstChild);
});
