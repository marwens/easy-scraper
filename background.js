var data;
chrome.browserAction.onClicked.addListener(function(tab) {

});
chrome.runtime.onMessage.addListener(function(message, sender, sendRespose) {
    //make sure that the message is coming from our extension
    if (chrome.runtime.id == sender.id && message.to == 'background') {
        //if the message source is our extension web popup

        if (message.source == 'popup') {
            switch (message.action) {
                case 'select':
                    //we need to help user select an item
                    console.log('select');
                    chrome.tabs.executeScript({ file: "js/selector.js" });
                    break;
                default:
                    console.log('not int cases');
                    break;
            }
        }
        // if the message source is our injected script
        if (message.source == 'injector') {
            switch (message.action) {
                case 'init':
                    // sendRespose("injector init done");
                    break;
                case 'elemselectd':
                    console.log('message')
                    console.log(message)
                    data = (message.el);
                    console.log(data)
                    sendRespose("thank you for the info");
                    break;
                default:
                    console.log('not int cases');
                    break;
            }
        }
    }

})


function injectscript() {

}