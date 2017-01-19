function startColor() {
    chrome.tabs.executeScript({
        file: 'invert.js'
    });
}

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

document.getElementById('clickme').addEventListener('click', startColor);