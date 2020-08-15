'use strict';

document.getElementById('colors').addEventListener('change', function() {
    // Chrome 内にJavaScriptを埋め込んで実行するには chrome.tabs.executeScript を使います。
    chrome.tabs.executeScript({
        // Chrome内でJavaScriptを実行するには、code: をキーにJavascriptを書いていきます。
      code: 'document.body.style.backgroundColor = "' + this.value + '"'
    });
  });