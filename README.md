# Electron Application tutorial

### Instructions

[Link to instructions](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app)

- Create a folder ```mkdir electron-app```
- Run ```npm init -y```
- Install dependency ```npm install electron --save-dev```
- Add in package.json in the scripts line ```"dev": "electron ."``` and edit main line ```"main": "main.js"```
- Create ```main.js``` in main.js add this code:
   
``` const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

```