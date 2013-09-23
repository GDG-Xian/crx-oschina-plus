
function saveDraftHandler(request, sender, sendResponse) {
    localStorage['translate-' + request.translateId] = request.content;    
    sendResponse('草稿已经保存');
}

function revertDraftHandler(request, sender, sendResponse) {
    var content = localStorage['translate-' + request.translateId];
    console.log(request, content);
    sendResponse(content);
}

var dispatcher = {
    'save-draft': saveDraftHandler,
    'revert-draft': revertDraftHandler
};

// 响应来自页面和弹出层的翻译请求
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var handler = dispatcher[request.action];
    handler(request, sender, sendResponse);

    return true;
});
