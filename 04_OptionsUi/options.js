'use strict';

// オプションが選択された時の動作です。
document.addEventListener('DOMContentLoaded', function() {
  // ストレージに保存しておいたkeyを取り出すためのロジック
  chrome.storage.sync.get({
    // 第一引数は取り出すkeyです。値はもしkeyが存在しなかった場合のデフォルト値です。
    color: 'red'
  }, function(item) {
    // keyの読み込みが終わった後に呼ばれるコールバック関数です。
    document.getElementById('colors').value = item.color;
  });
});

document.getElementById('save').addEventListener('click', function() {
  var color = document.getElementById('colors').value;
  // chromeのストレージに保存する方法です。
  chrome.storage.sync.set({
    // ストレージにセットするkeyはcolorで、値はvar colorです。
    color: color
  }, function() {
    // ストレージへのセット処理が終わった後に呼ばれるコールバック関数です。
    console.log('saved: ' + color);
  });
});
