document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    var descriptionBox = document.querySelector('.content');
    var scrollableElement = document.querySelector('.inner-box:last-child');

    var fileNames = {
        'Girassol Flores Fácil': 'txts/girassol.txt',
        'Alface Verduras Fácil': 'txts/alface.txt',
        'Manjericão Verduras Fácil': 'txts/manjericao.txt',
        'Morango Frutas Fácil': 'txts/morango.txt',
        'Suculenta Cactus Fácil': 'txts/suculenta.txt',
        'Espada de São Jorge Outros': 'txts/espada.txt',
        'Violeta Flores': 'txts/violeta.txt',
        'Samambaia Outros Fácil': 'txts/samambaia.txt',
        'Tomate Frutas Fácil': 'txts/tomate.txt',
        'Melancia Frutas': 'txts/melancia.txt',
        'Copo de Leite Flores Fácil': 'txts/leite.txt',
        'Abobora Frutas': 'txts/abobora.txt',
        'Pepino Verduras': 'txts/pepino.txt',
        'Batata Verduras Fácil': 'txts/batata.txt',
        'Mandioca Verduras': 'txts/mandioca.txt',
        'Couve Verduras Fácil': 'txts/couve.txt',
        'Bromelia Flores': 'txts/bromelia.txt',
        'Hibisco Flores': 'txts/hibisco.txt',
        'Rosa Flores': 'txts/rosa.txt',
        'Amora Frutas Fácil': 'txts/amora.txt',
        'Acerola Frutas': 'txts/acerola.txt',
        'Abacaxi Frutas': 'txts/abacaxi.txt',
        'Orquídea Flores': 'txts/orquidea.txt',
        'Cróton Outros': 'txts/croton.txt',
        'Jibóia Outros Fácil': 'txts/jiboia.txt'
    };

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var fileName = fileNames[item.dataset.name];

            if (fileName) {
                fetch(fileName)
                    .then(response => response.text())
                    .then(data => {
                        descriptionBox.innerHTML = data;
                        scrollableElement.scrollTop = 0;
                    })
                    .catch(error => console.error(error));
            }
        });
    });
});