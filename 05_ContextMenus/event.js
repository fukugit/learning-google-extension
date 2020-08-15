'use strict';

// 右クリックされた時のメニューを作成します。
// chrome.runtime.onInstalled これはextensionがインストールされた時という意味です。
chrome.runtime.onInstalled.addListener(function() {
  // 親メニュー
  var parent = chrome.contextMenus.create({
    id: 'parent',
    title: 'Choose Background Color'
  });
  // 子階層のメニュー
  chrome.contextMenus.create({
    id: 'red',
    parentId: parent,
    title: 'Red'
  });
  chrome.contextMenus.create({
    id: 'blue',
    parentId: parent,
    title: 'Blue'
  });
  chrome.contextMenus.create({
    id: 'green',
    parentId: parent,
    title: 'Green'
  });
});

// 右クリックメニューが選択された時のイベントです。
// itemは選択されたメニュー（red, blue, green）が入ってきます。
chrome.contextMenus.onClicked.addListener(function(item) {
  chrome.tabs.executeScript({
    // item.menuItemId を指定すると上の子階層のidが入ってきます。（入ってくるidは、選択されたメニューのいずれかです）
    code: 'document.body.style.backgroundColor = "' + item.menuItemId + '"'
  });
});