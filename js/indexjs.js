document.getElementById("myselectButton").addEventListener("click", select);

function select() {
    chrome.runtime.sendMessage({ source: 'popup', to: 'background', action: 'select' }, (response) => {
        console.log(response)
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var bg = chrome.extension.getBackgroundPage();
    var myURL = bg.data;
    console.log(myURL)

});