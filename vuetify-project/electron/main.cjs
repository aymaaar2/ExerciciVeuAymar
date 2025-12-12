const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.npm_lifecycle_event === "electron:dev";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Permisos para el micrófono
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    return callback(permission === 'media');
  });
  
  mainWindow.webContents.session.setPermissionCheckHandler((webContents, permission) => {
    return permission === 'media';
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});