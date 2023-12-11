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