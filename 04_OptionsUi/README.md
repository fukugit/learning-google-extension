# 04_OptionsUi
「拡張機能のオプション」をクリック時にHTMLで色のリストを表示して、選択した色をChromeストレージに保存します。Google extenstionのアイコンクリックでChromeストレージから色を取得して開いているWebページの背景色へ設定します。  

## What I learn in this project. 
1. Chromeの「拡張機能のオプション」でHTMLを表示する方法
2. HTMLのFormの値をJavascriptで取得する方法
3. 特定の値をChromeストレージに登録する方法
4. 特定の値をChromeストレージから取得する方法
5. 開いているWebページのstyleを変更する方法

## Project Structure  
| ファイル                             | 概要                                                 |
| -------------------------------- | -------------------------------------------------- |
| [icon.png](./icon.png)           | アイコン                                               |
| [manifest.json](./manifest.json) | Google Extensionの設定ファイル                            |
| [options.html](./options.html)   | 「拡張機能のオプション」で表示されるHTML                             |
| [options.js](./options.js)       | 特定の値をChromeストレージに登録するJavascript                    |
| [event.js](./event.js)           | アイコンクリック時に発動するJavascript (特定の値をChromeストレージから取得します) |

## Memo
Google Extenstionアイコンクリック時にJavascriptを発火させるには [manifest.json](./manifest.json) に以下のように設定します。  
```javascript
"background": {
  "scripts": ["event.js"],
  "persistent": false  // trueにするとJavascriptが常駐します。falseだとアイコンクリック時のみ発動します。
}
```

Chrome ストレージを使うには [manifest.json](./manifest.json) に以下のように設定します。  
```javascript
"permissions": [
  "activeTab",
  "storage"
]
```

「拡張機能のオプション」をクリック時にHTMLを表示するには、[manifest.json](./manifest.json) に以下のように設定します。  
```javascript
 "options_ui": {
  "page": "options.html",
  "chrome_style": true
},
```