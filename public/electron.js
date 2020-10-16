//artigo de referencia
//https://carloslevir.com/aplicacao-desktop-react-electron/

const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow


function createWindow() {

    mainWindow = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true
        }
    })


    mainWindow.loadURL(

        isDev ? 'http://localhost:3000/' : `file://${path.resolve(__dirname, '..', 'buil', 'index.html')}`
    )



    mainWindow.on('close', () => {

        mainWindow = null
    })

}


app.on('ready', () => {

    createWindow()

})


app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {

        app.quit()


    }
})


app.on('activate', () => {


    if (mainWindow === null) {

        createWindow()

    }
})
