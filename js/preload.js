/*
 * @Author: Narika
 */
const { contextBridge, ipcRenderer } = require('electron')
const { dialog } =  require('electron')
const { BrowserWindow } =  require('electron')

contextBridge.exposeInMainWorld('frameBtn',{
    close: () =>{
        ipcRenderer.send('exit')
    },
    min: () =>{
        ipcRenderer.send('min2tray')
    }
})

contextBridge.exposeInMainWorld('fileOp',{
    //TODO:Move to main.js(Main Process)
    openSelectDialog: (event, title) =>{
        dialog.showOpenDialog({
            title: title,
            filters:[{
                name: 'rena_index',
                extensions: ['__rena_index_2']
            }],
            properties: ['openFile']
        })
    }
    
})