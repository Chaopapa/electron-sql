const {ipcMain,BrowserWindow}  =require('electron');
ipcMain.on('home-page-message',()=>{
   let win =  BrowserWindow.fromId(1);
   win.setBounds({
       width:1080,
       height:800,
       x:50,
       y:30,
   });
   
});