const text = document.querySelector('textarea');

document.querySelector('input[type=submit]')
    .addEventListener('click', saveText);
function saveText(e) {
    e.preventDefault();
    localStorage['text'] = text.value;
}

document.querySelector('.load')
    .addEventListener('click', loadText);
function loadText() {
    text.value = localStorage['text'] || '';
}
