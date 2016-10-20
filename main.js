const {app,BrowserWindow} = require('electron')

let win

function create_window(){

    win = new BrowserWindow({width: 800, height: 600, transparent: true,titleBarStyle: 'hidden',backgroundColor:'#CCFFFFFF'})
    win.show()
    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/index.html`)

    // Open the DevTools.
    // win.webContents.openDevTools()

    win.on('closed',() =>{
        win = null
    })
}
console.log(app.getPath('userData'));
// app.commandLine.appendSwitch('enable-transparent-visuals');
    app.on('ready',create_window)
    app.commandLine.appendSwitch('--enable-experimental-web-platform-features');
    app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
        }
    })

    app.on('activate', () => {
console.log("BENJ");
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (win === null) {
        createWindow()
      }
    })
