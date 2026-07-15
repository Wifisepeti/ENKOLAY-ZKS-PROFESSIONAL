const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {

    win = new BrowserWindow({

        width: 1450,
        height: 900,
        minWidth: 1200,
        minHeight: 700,

        title: "ENKOLAY ZKS Professional",

        webPreferences: {

            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true

        }

    });

    win.removeMenu();

    win.loadFile("login.html");

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {

    if (process.platform !== "darwin")
        app.quit();

});