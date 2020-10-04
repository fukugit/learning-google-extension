# 07-MessagePassing
リンク数を取得してChrome Extenstionアイコンへ数字を反映します。  

## What I learn in this project. 
1. Webページ表示時にJavascriptを発動する方法
2. Webページ内のリンクを取得する方法
3. リンクを別Javascrtiptへ渡す方法

## Project Structure  
| ファイル                             | 概要                         |
| -------------------------------- | -------------------------- |
| [manifest.json](./manifest.json) | Google Extensionの設定ファイル    |
| [content.js](./content.js)       | Webページ内のリンク数を取得するJavascriptです。リンク数は[event.js](./event.js)へ送ります。 |
| [event.js](./event.js)           | Webページ内のリンク数を[content.js](./content.js)から受け取るJavascriptです。 |

## Memo
Webページ表示時にJavascriptを実行するには [manifest.json](./manifest.json) に以下のように設定します。  
```javascript
"content_scripts": [
  {
    "matches": ["<all_urls>"],  // 全てのページが対象になります。ドメインを特定することもできます。
    "js": ["content.js"]
  }
]
```

Webページ内のリンク数を[content.js](./content.js)から受け取るには [manifest.json](./manifest.json) に以下のように設定します。  
```javascript
"background": {
  "scripts": ["event.js"],
  "persistent": false  // trueにするとJavascriptが常駐します。falseだとアイコンクリック時のみ発動します。
}
```