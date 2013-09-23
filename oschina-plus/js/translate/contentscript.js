setTimeout(function() {
    var editor = document.querySelector('.ke-edit-iframe').contentWindow.document;

    function getTranslateId() {
        var url = document.location.search;
        return /id=(\d+)/.test(url) && RegExp.$1;
    }

    function editorHTML(content) {
        if (content != undefined) {
            editor.body.innerHTML = content;
        } else {
            return editor.body.innerHTML;
        }
    }

    function saveDraft(evt) {
        chrome.runtime.sendMessage({
            action: 'save-draft',
            translateId: getTranslateId(),
            content: editorHTML()
        }, function(message) {
            alert(message);
        });
    }

    function revertDraft() {
        chrome.runtime.sendMessage({
            action: 'revert-draft',
            translateId: getTranslateId()
        }, function(content) {
            editorHTML(content);
        });
    }

    // 添加暂存翻译的额按钮
    var actionBar = document.querySelector('.Edit .Top .action');
    var btnDraft = document.createElement('a');
    btnDraft.id = 'btn_draft';
    btnDraft.href = 'javascript:void(0);';
    btnDraft.className = 'DRAFT_BUTTON';
    btnDraft.innerHTML = '保存草稿';
    actionBar.appendChild(btnDraft);
    actionBar.addEventListener('click', saveDraft, false);

    revertDraft();
}, 500);
