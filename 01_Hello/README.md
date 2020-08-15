# 01_Hello
Google extension アイコンをクリックすると自作HTMLを表示させます。

## 本プロジェクトの動かし方
### インストール
Chromeの拡張機能を開いてデベロッパーモードをONにします。  
![](./img/image1.gif)  
***
パッケージ化されていない拡張機能を読み込みをクリックして、「01_Hello」フォルダ（このフォルダ）を読み込みます。  
![](./img/image2.gif)  
***
拡張機能を選択します。  
![](./img/image3.gif)  
***
「01_Hello」がGoogle extension アイコンに表示されるようピン留めします。  
![](./img/image4.gif)  
***
Google extension アイコンに一覧にチューリップのアイコンが表示されればOKです。  
![](./img/image5.gif)  
***

## 本プロジェクトの概要
### ファイル構成
```manifest.json``` は設定ファイルとなります。  
```popup.html```はGoogle extension アイコンをクリックしたときに表示されるHTMLになります。  
このプロジェクトでは得にJS, CSSは使用していません。  
### 挙動
iconをクリックしたときに```popup.html```が動作します。
```json
"browser_action": {
    "default_icon": {
        "16": "icon.png"
    },
    "default_popup": "popup.html"
}
```
