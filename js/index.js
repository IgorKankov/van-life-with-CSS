document.querySelector('.get-first-pic').addEventListener('click', getFirstPic);

function getFirstPic() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.var-pic').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'first-picture.html', true);
    xhr.send();
}