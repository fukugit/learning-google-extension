# 06_ContextScript
Webページ表示にページ内のリンク数を取得してalertを表示します。  

## このプロジェクトで学んだこと
1. Webページ表示時にJavascriptを発動する方法
2. Webページ内のリンクを取得する方法

## このプロジェクトの構成 
| ファイル                             | 概要                         |
| -------------------------------- | -------------------------- |
| [manifest.json](./manifest.json) | Google Extensionの設定ファイル    |
| [content.js](./content.js)       | Webページ内のリンクを取得するJavascript |

## メモ
Webページ表示時にJavascriptを表示するには [manifest.json](./manifest.json) に以下のように設定します。  
```javascript
"content_scripts": [
  {
    "matches": ["<all_urls>"],  // 全てのページが対象になります。ドメインを特定することもできます。
    "js": ["content.js"]
  }
]
```