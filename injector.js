console.log('kk');

chrome.runtime.sendMessage({ source: 'injector', to: 'background', action: 'init' }, (response) => {
    console.log(response)
});