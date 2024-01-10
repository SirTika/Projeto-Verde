document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    var descriptionBox = document.querySelector('.content');
    var scrollableElement = document.querySelector('.inner-box:last-child');

    var fileNames = {
        'Girassol Flores Facil': 'txts/girassol.txt',
        'Alface Verduras Facil': 'txts/alface.txt',
        'Manjericão Verduras Facil': 'txts/manjericao.txt',
        'Morango Frutas Facil': 'txts/morango.txt',
        'Suculenta Cactus Facil': 'txts/suculenta.txt',
        'Espada de São Jorge Outros': 'txts/espada.txt',
        'Violeta Flores': 'txts/violeta.txt',
        'Samambaia Outros Facil': 'txts/samambaia.txt',
        'Tomate Frutas Facil': 'txts/tomate.txt',
        'Melancia Frutas': 'txts/melancia.txt',
        'Copo de Leite Flores Facil': 'txts/leite.txt',
        'Abobora Frutas': 'txts/abobora.txt',
        'Pepino Verduras': 'txts/pepino.txt',
        'Batata Verduras Facil': 'txts/batata.txt',
        'Mandioca Verduras': 'txts/mandioca.txt',
        'Couve Verduras Facil': 'txts/couve.txt',
        'Bromelia Flores': 'txts/bromelia.txt',
        'Hibisco Flores': 'txts/hibisco.txt',
        'Rosa Flores': 'txts/rosa.txt',
        'Amora Frutas': 'txts/amora.txt',
        'Acerola Frutas': 'txts/acerola.txt',
        'Abacaxi Frutas': 'txts/abacaxi.txt',
        'Orquídea Flores': 'txts/orquidea.txt',
        'Cróton Outros': 'txts/croton.txt',
        'Jibóia Outros': 'txts/jiboia.txt',
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