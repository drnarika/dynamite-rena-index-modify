/*
 * @Author: Narika
 */
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')


function createWindow() {
    const winw = new BrowserWindow({
        webPreferences:{
            preload: path.join(__dirname,'preload.js'),
        },
        frame: false,
        resizable: false,
        width: 1000,
        height: 562
    })

    ipcMain.on('exit',()=>{
        app.quit()
    }
    )
    winw.loadFile('./index.html')
}

app.whenReady().then(()=>{
    createWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})