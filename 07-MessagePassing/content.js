// 即時関数
(function() {
    'use strict';
 
    // ページ内のaタグ全てを取得します。
    var links = document.getElementsByTagName('a');
    // event.jsへメッセージを送信します。
    chrome.runtime.sendMessage({count: links.length}, function() {
      console.log('message sent!');
    });
})();
