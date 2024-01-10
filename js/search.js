/* barra de pesquisa */
document.querySelector('input[name="search"]').addEventListener('input', function(e) {
    var value = e.target.value.toLowerCase();
    document.querySelectorAll('.item').forEach(function(item) {
        var name = item.getAttribute('data-name').toLowerCase();
        if (name.indexOf(value) === -1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});

/* tags/filtro */
function selectTag(button) {
    var buttons = document.getElementsByClassName('tagSearch');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] !== button && buttons[i].innerHTML !== 'Facil') {
            buttons[i].classList.remove('selected');
        }
    }
    button.classList.toggle('selected');
    filterItems();
}

function toggleFacil(button) {
    if (button.innerHTML === 'Facil') {
        button.classList.toggle('selected');
        filterItems();
    }
}

function filterItems() {
    var items = document.getElementsByClassName('item');
    var buttons = document.getElementsByClassName('tagSearch');
    var selectedTags = Array.from(buttons).filter(button => button.classList.contains('selected')).map(button => button.innerHTML.toLowerCase());
    for (var i = 0; i < items.length; i++) {
        var itemTags = items[i].getAttribute('data-name').toLowerCase().split(' ');
        if (selectedTags.every(tag => itemTags.includes(tag))) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}
