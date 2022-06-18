/*
 * @Author: Narika
 */
const {app, BrowserWindow, ipcMain, Tray, Menu} = require('electron')
const path = require('path')

function createWindow() {
    const winw = new BrowserWindow({
        webPreferences:{
            preload: path.join(__dirname,'js/preload.js'),
        },
        frame: false,
        resizable: false,
        width: 1000,
        height: 562
    })
    winw.loadFile('./index.html')
    return winw
}

function ipcListening(win){
    ipcMain.on('exit',()=>{
        app.quit()
    })
    
    ipcMain.on('min2tray',()=>{
        win.hide()

        const appTray = new Tray(path.join(__dirname, './pic/app_icon.png'))
        const trayMenuTemplate = [
            {
                label: '退出',
                click: () => {
                    app.quit();
                }
            }
        ]
        appTray.setToolTip('Dynamite Index Toolbox');
        appTray.setContextMenu(Menu.buildFromTemplate(trayMenuTemplate))
        appTray.on('click', () => {
            win.show();
            appTray.destroy()
        });
    })
}

app.whenReady().then(()=>{
    const win = createWindow()
    ipcListening(win)

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})