function selectx() {

}
document.getElementById("myselectButton").addEventListener("click", select);

function select() {
    chrome.runtime.sendMessage({ source: 'popup', action: 'select' }, (response) => {
        console.log(response)
    });
}