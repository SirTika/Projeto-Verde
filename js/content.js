document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    var descriptionBox = document.querySelector('.content');
    var scrollableElement = document.querySelector('.inner-box:last-child');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var fileName;
            if (item.dataset.name === 'Girassol Flores Iniciantes') {
                fileName = 'txts/girassol.txt';
            } else if (item.dataset.name === 'Alface Verduras Iniciantes') {
                fileName = 'txts/alface.txt';
            } else if (item.dataset.name === 'Manjericão Verduras Iniciantes') {
                fileName = 'txts/manjericao.txt';
            } else if (item.dataset.name === 'Morango Frutas Iniciantes') {
                fileName = 'txts/morango.txt';
            } else if (item.dataset.name === 'Suculenta Cactus Iniciantes') {
                fileName = 'txts/suculenta.txt';
            } else if (item.dataset.name === 'Espada de São Jorge Outros') {
                fileName = 'txts/espada.txt';
            } else if (item.dataset.name === 'Violeta Flores') {
                fileName = 'txts/violeta.txt';
            } else if (item.dataset.name === 'Samambaia Outros Iniciantes') {
                fileName = 'txts/samambaia.txt';
            } else if (item.dataset.name === 'Tomate Frutas Iniciantes') {
                fileName = 'txts/tomate.txt';
            } else if (item.dataset.name === 'Melancia Frutas') {
                fileName = 'txts/melancia.txt';
            }

            fetch(fileName)
                .then(response => response.text())
                .then(data => {
                    descriptionBox.innerHTML = data;
                    scrollableElement.scrollTop = 0;
                })
                .catch(error => console.error(error));
        });
    });
});