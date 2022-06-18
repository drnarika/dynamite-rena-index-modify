const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('frameBtn',{
    close: () =>{
        ipcRenderer.send('exit')
    },
    min: () =>{
        ipcRenderer.send('min2tray')
    }
})