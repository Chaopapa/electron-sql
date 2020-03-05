const {ipcMain}  =require('electron');
const SQL  = require('../../utils/db');
ipcMain.on('login-message',(event,arg)=>{
    console.log(arg);
    new SQL(arg);
    event.sender.send('login-reply','success');
});