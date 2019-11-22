document.querySelector('.first-engine').addEventListener('click', enRev);

function enRev() {
    fetch('first-engine.html')
        .then(response => response.text())
        .then(html => document.querySelector('.engine').innerHTML = html);
}

document.querySelector('.second-engine').addEventListener('click', secEn);

function secEn() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const enInfo = JSON.parse(xhr.responseText);
            document.querySelector('.engine-type').innerText = enInfo.engine;
            document.querySelector('.fuel-type').innerText = enInfo.fuel;
            document.querySelector('.power').innerText = enInfo.power;
        }
    }
    xhr.open('get', 'second-engine.json', true);
    xhr.send();
}

