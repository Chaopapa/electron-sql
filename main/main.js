const {app,BrowserWindow}  = require('electron');
require('./ipc');

function createWindow(){
    const mainWindow = new BrowserWindow({
        width:500,
        height:500,
        minWidth:400,
        minHeight:400,
        webPreferences:{
            nodeIntegration:true
        },
        title:'Supersonic SQL',
        titleBarStyle:'hiddenInset'
    });
    mainWindow.loadURL('http://localhost:8080');
    
    mainWindow.webContents.openDevTools();

    //重新设置窗口
    // mainWindow.setBounds({
    //     // width:100,
    //     // height:100
    // })
    
}

app.on('ready',createWindow);

