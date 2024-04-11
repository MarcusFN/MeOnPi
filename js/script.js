document.addEventListener('DOMContentLoaded', function() {
    const switchThemeBtn = document.createElement('button');
    switchThemeBtn.textContent = 'Skift Tema';
    switchThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    document.body.insertBefore(switchThemeBtn, document.body.firstChild);

    var img = document.createElement("img");
    img.src = 'img/CVImage1.jpeg';
    img.id ='CVImage1';
    img.addEventListener('mouseover', function (){
       img.style.opacity = '0.8';
    });
    img.addEventListener('mouseout',function (){
        img.style.opacity = '1';
    });
    var header = document.getElementById('appendPicture');
    header.appendChild(img);
});

