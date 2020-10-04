# 08-NewTab
Chromeでタブを新規で開いたときにHTMLを表示させます。  

## What I learn in this project. 
1. タブ表示時に自作HTMLを表示する方法

## Project Structure  
| ファイル                             | 概要                         |
| -------------------------------- | -------------------------- |
| [manifest.json](./manifest.json) | Google Extensionの設定ファイル    |
| [new.html](./new.html)       | Chromeタブを開いた時に表示されるHTMLです。 |

## Memo
HTMLを表示するには [manifest.json](./manifest.json) に以下のように設定します。(非常に簡単な設定です。)  
```javascript
"chrome_url_overrides": {
  "newtab": "new.html"
}
```