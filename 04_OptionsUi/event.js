'use strict';

// chrome の拡張機能のアイコンがクリックされたときに発動します。
chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.sync.get({
    color: 'red'
  }, function(item) {
    // Chrome 内でJavaScriptを実行します。
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor = "' + item.color + '"'
    });
  });
});