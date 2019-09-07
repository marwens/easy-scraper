chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log("The color is green.");
    });
});

chrome.browserAction.onClicked.addListener(function(tab) {

});
chrome.runtime.onMessage.addListener(function(message, sender, sendRespose) {
    //make sure that the message is coming from our extension
    if (chrome.runtime.id == sender.id) {
        //if the message source is our extension web popup
        if (message.source == 'popup') {

        }
        // if the message source is our injected script
        if (message.source == 'injection') {

        }
    }
    sendRespose("hi to you");

})