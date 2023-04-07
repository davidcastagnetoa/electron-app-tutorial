const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 400,
    minWidth: 400,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration
      contextIsolation: false, // Disable context isolation to allow access to Electron APIs from the renderer process
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
  // o mainWindow.loadURL("https://moonshotguide.github.io/");

  // Create a personal menú
  const template = [
    {
      label: "Archivo",
      submenu: [
        {
          label: "Abrir",
          accelerator: "CmdOrCtrl+O", // Atajo de teclado para abrir el menú
          click() {
            console.log("Abriendo archivo...");
          },
        },
        {
          label: "Cerrar",
          accelerator: "CmdOrCtrl+1", // Atajo de teclado para abrir el menú
          click() {
            console.log("Cerrando archivo...");
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  

  // Oculta el menú por defecto
  // Menu.setApplicationMenu(null);
  // Muestra el menu
  Menu.setApplicationMenu(menu);

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

//Load the window
app.whenReady().then(() => {
  createWindow();
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

//Close Window
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// IPC handler for toggling the always on top setting
ipcMain.on("toggle-always-on-top", (event) => {
  const alwaysOnTop = !mainWindow.isAlwaysOnTop();
  mainWindow.setAlwaysOnTop(alwaysOnTop);
});
