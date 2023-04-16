import { app, ipcMain as ipc, nativeImage, screen } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import path from 'path';

const isProd: boolean = process.env.NODE_ENV === 'production';
const taskbarComplete = !false

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainScreen = screen.getPrimaryDisplay()
  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    minWidth: 501,
    minHeight: 502,
    maxHeight: mainScreen.size.height,
    maxWidth: mainScreen.size.width,
    titleBarStyle: isProd ? 'hidden' : taskbarComplete ? 'default' : 'hidden',
    icon: nativeImage.createFromPath(path.join(__dirname, '../resources/icon.png')),
    titleBarOverlay: {
      color: '#202020',
      symbolColor: '#fff',
      height: 31,
    },
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools({ mode: taskbarComplete ? 'left' : 'detach' });
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
