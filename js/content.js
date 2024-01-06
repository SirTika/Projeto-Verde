document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    var descriptionBox = document.querySelector('.content');
    var scrollableElement = document.querySelector('.inner-box:last-child');

    var fileNames = {
        'Girassol Flores Iniciantes': 'txts/girassol.txt',
        'Alface Verduras Iniciantes': 'txts/alface.txt',
        'Manjericão Verduras Iniciantes': 'txts/manjericao.txt',
        'Morango Frutas Iniciantes': 'txts/morango.txt',
        'Suculenta Cactus Iniciantes': 'txts/suculenta.txt',
        'Espada de São Jorge Outros': 'txts/espada.txt',
        'Violeta Flores': 'txts/violeta.txt',
        'Samambaia Outros Iniciantes': 'txts/samambaia.txt',
        'Tomate Frutas Iniciantes': 'txts/tomate.txt',
        'Melancia Frutas': 'txts/melancia.txt',
        'Copo de Leite Flores Iniciantes': 'txts/leite.txt',
        'Abobora Frutas': 'txts/abobora.txt',
        'Pepino Verduras': 'txts/pepino.txt',
        'Batata Verduras Iniciantes': 'txts/batata.txt',
        'Mandioca Verduras': 'txts/mandioca.txt',
        'Couve Verduras Iniciantes': 'txts/couve.txt'
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