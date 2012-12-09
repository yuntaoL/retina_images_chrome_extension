var iconDisplyed = false;

function onRequest(request, sender, sendResponse) {
    if(!iconDisplyed){
        iconDisplyed = true;
        chrome.pageAction.show(sender.tab.id);
        //sendResponse({});
    }
}

chrome.extension.onRequest.addListener(onRequest);