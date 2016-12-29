
//Add page_action icon to bing pages only
browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    browser.storage.local.get(['pageaction'], function (storageSet) {
        var bingRE = /bing/i;
        if (bingRE.test(tab.url) && (storageSet["pageaction"] != true)) {
            if (tabId != null) {
                browser.pageAction.show(tabId);
            }
        }
    });
});

//listen for clicks to the button
browser.pageAction.onClicked.addListener(function (tabs) {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        openPage(tab.url, tab.index);
    });
});

//listen to the keydown event from the content_script injected bingable.js
browser.runtime.onMessage.addListener(notify);

function notify(message) {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        openPage(message.url, tab.index);
    });
}

function openPage(url, currentTabIndex){
    currentTabIndex = currentTabIndex ? currentTabIndex : 1;
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    var query = vars['q'];
    if(query != undefined){
        browser.tabs.create(
            { 
                url: "https://www.google.com/?#q="+query.replace("+"," "),
                index: currentTabIndex
            })
    }
}