'use strict';

// content.js から送信されたメッセージを受け取ります。
chrome.runtime.onMessage.addListener(
  // messageは送信されたメッセージ、
  // senderはメッセージを送ってきたオブジェクト、
  // callbackは受信後に動作するコールバック関数です。
  // 今回はmessageのみを使用します。
  function(message, sender, callback) {
    // メッセージをextentsionのアイコンへ表示させます。
    chrome.browserAction.setBadgeText({text: message.count + ''});
  }
);