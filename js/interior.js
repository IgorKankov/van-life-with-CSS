document.querySelector('.get-variant').addEventListener('click', getVariant);

function getVariant() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.variants').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'variant.html', true);
    xhr.send();
}

