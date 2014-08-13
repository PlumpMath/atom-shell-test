var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');

console.log('Loading a web page');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({show: false});
    mainWindow.loadUrl('http://www.phantomjs.org/');
    mainWindow.webContents.on('did-finish-load', function() {
        console.log("loaded page title: ", mainWindow.webContents.getTitle());
        app.quit();
    });
});

