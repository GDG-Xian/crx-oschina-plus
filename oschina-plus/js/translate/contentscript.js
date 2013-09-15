// 添加暂存翻译的额按钮
var actionBar = document.querySelector('.Edit .Top .action');
var btnDraft = document.createElement('a');
btnDraft.id = 'btn_draft';
btnDraft.href = 'javascript:void(0);';
btnDraft.className = 'DRAFT_BUTTON';
btnDraft.innerHTML = '保存草稿';
actionBar.appendChild(btnDraft);