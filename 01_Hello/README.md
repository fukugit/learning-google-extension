# 01_Hello
Google extension アイコンをクリックすると自作HTMLを表示させます。

## What I learn in this project. 
1. ```manifest.json``` がGoogle extension の設定ファイルになります。
2. Chromeの右上へ表示されるGoogle extension のアイコンの出し方。下記は```manifest.json``` の内容ですが「16」は画像サイズです。```default_popup```はアイコンをクリックした時に表示されるHTMLです。
```json
"browser_action": {
    "default_icon": {
        "16": "icon.png"
    },
    "default_popup": "popup.html"
}
```

## Project Structure  
* [manifest.json](./manifest.json)は設定ファイルとなります。  
* [popup.html](./popup.html)はGoogle extension アイコンをクリックしたときに表示されるHTMLになります。  
* このプロジェクトでは得にJS, CSSは使用していません。  


