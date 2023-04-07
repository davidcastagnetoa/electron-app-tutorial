const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 400,
    minWidth: 400
  });

  // window.loadFile("index.html"); //load a HTML file
  window.loadURL("https://moonshotguide.github.io/"); //load a url
};

app.whenReady().then(()=>{
    createWindow() // window
})