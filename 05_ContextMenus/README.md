# 05_ContextMenus
Chrome画面内で右クリックで色のリストを表示して、選択した色を開いているWebページの背景色へ設定します。  

## このプロジェクトで学んだこと
1. Chrome画面内で右クリックでリストを表示する方法
2. 選択した色を開いているWebページのstyleを変更する方法

## このプロジェクトの構成 
| ファイル                             | 概要                              |
| -------------------------------- | ------------------------------- |
| [manifest.json](./manifest.json) | Google Extensionの設定ファイル         |
| [event.js](./event.js)           | 右クリック時にリストを表示/画面へ反映するJavascript |

## メモ
右クリック時にHTMLを表示するには [manifest.json](./manifest.json) に以下のように設定します。  
```javascript
"permissions": [
  "activeTab",
  "contextMenus"
]
```