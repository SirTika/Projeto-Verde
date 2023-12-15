items.forEach(function(item) {
    item.addEventListener('click', function() {
        var fileName;
        if (item.dataset.name === 'Girassol Flores Iniciantes') {
            fileName = 'txts/girassol.txt';
        } else if (item.dataset.name === 'Alface Verduras Iniciantes') {
            fileName = 'txts/alface.txt';
        }
        // e assim por diante para os outros itens

        fetch(fileName)
            .then(response => response.text())
            .then(data => {
                descriptionBox.innerHTML = data;
            })
            .catch(error => console.error(error));
    });
});