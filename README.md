# learning-google-extension
Google extension を作成するための基本的な勉強したのでそのまとめまです。

## このプロジェクトの構成  
このプロジェクトでは、以下のフォルダ毎に個別のGoogle Extensionを用意しています。  

| ディレクトリ                                   | 概要                                         | 学んだこと                     |
| ---------------------------------------- | ------------------------------------------ | ------------------------- |
| [01_Hello](./01_Hello)                   | HTMLを表示します。                                | Chromeへのアイコン表示            |
|                                          |                                            | アイコンクリックでHTML表示           |
| [02_ShowTabsInfo](./02_ShowTabsInfo)     | タブ名をHTMLへ表示します。                            | タブ名の取得                    |
|                                          |                                            | 取得したタブ名をHTMLで表示           |
| [03_ChangeBgColor](./03_ChangeBgColor)   | Webページの背景色変更します                            | HTMLでリスト表示                |
|                                          |                                            | 表示されているWebページの背景色変更       |
| [04_OptionsUi](./04_OptionsUi)           | Chromeオプションを開いて、値をChromeストレージへsave/readします | Chromeのオプションを開く           |
|                                          |                                            | Chromeストレージへ保存            |
|                                          |                                            | Chromeストレージ読み込み           |
| [05_ContextMenus](./05_ContextMenus)     | Webページ内を右クリックでメニューを表示します。                  | 右クリックでメニュー表示              |
|                                          |                                            | メニュー内容を取得                 |
| [06_ContextScript](./06_ContextScript)   | Webページのリンク数を取得します。                         | 表示されているWebページのリンク数を取得     |
| [07-MessagePassing](./07-MessagePassing) | アイコンへWebページのリンク数を反映します。                    | リンク数を取得してアイコンへ数字を反映       |
| [08-NewTab](./08-NewTab)                 | Chromeタブの初期表示時にHTML表示します。                  | Chromeタブを初期表示時に自前のHTMLを表示 |

## ローカルでの実行方法
このプロジェクトで用意されたGoogle ExtensionをChromeで動かす方法を説明します。

### 必要なアプリケーション
Chromeのみあれば動かすことができます。  

### インストール
[01_Hello](./01_Hello)のフォルダを例にしてインストール方法を記述します。  
他フォルダでも同様の方法でGoogle Extensionをインストールすることができます。  

#### デベロッパーモードをONにする
Chromeの拡張機能を開いてデベロッパーモードをONにします。  
![](./img/image1.gif)  
***
#### Google Extensionを読み込む
パッケージ化されていない拡張機能を読み込みをクリックして、各プロジェクト（例えば「01_Hello」フォルダ）を読み込みます。  
![](./img/image2.gif)  
***
#### Google Extensionを有効にする
拡張機能を選択します。  
![](./img/image3.gif)  
***
「01_Hello」がGoogle extension アイコンに表示されるようピン留めします。  
![](./img/image4.gif)  
***

### 実行方法
Google extension アイコンに一覧に表示されたチューリップのアイコンをクリックすると動作します。  
![](./img/image5.gif)  
***

## 参考にしたサイト
[Google Extensionの公式ページ](https://developer.chrome.com/extensions)
