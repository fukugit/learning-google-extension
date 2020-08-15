'use strict';

// 下記で開いているChromeの全てのタブ情報が取得できます。
// lastFocusedWindow: true で現在フォーカスのあたっているウィンドウのタブのみを取得します。
// active: truev で現在アクティブなタブのみの取得します。
// 何も指定しない場合は全てのタブが取得されます。
chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    let results = document.getElementById("results");
    let titles = [];
    for (let i = 0; i < tabs.length; i++) {
        titles.push(tabs[i].title);
    }
    results.value = titles.join("\n");
    // テキストを選択状態にします。
    results.select();
});