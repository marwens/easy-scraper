console.log('selector injected ');
var h;
document.body.addEventListener("mouseover", function(e) {
    e = e || window.event;

    var targetElem = e.target || e.srcElement;

    // you can use a switch on the nodeName and handle event
    targetElem.style.border = '3px solid red';
}, false);
document.body.addEventListener("mouseout", function(e) {
    e = e || window.event;

    var targetElem = e.target || e.srcElement;

    // you can use a switch on the nodeName and handle event
    targetElem.style.border = '';
}, false);
document.body.addEventListener("click", function(e) {
    e.preventDefault()
    e = e || window.event;

    var targetElem = e.target || e.srcElement;

    // you can use a switch on the nodeName and handle event
    targetElem.style.border = '3px solid green';
    h = targetElem;
    console.log(h);
    chrome.runtime.sendMessage({ source: 'injector', to: 'background', action: 'elemselectd', el: h }, (response) => {
        console.log(response)
    });
}, false);
chrome.runtime.sendMessage({ source: 'injector', to: 'background', action: 'init' }, (response) => {
    console.log(response)
});