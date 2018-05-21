const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
	win = new BrowserWindow({ width: 800, height: 600, backgroundColor: '#eee' });

	console.log(require('electron').screen.getPrimaryDisplay().bounds);
	win.loadURL(`file://${path.resolve('./electron-build/index.html')}`);

	win.webContents.openDevTools();

	win.setMenu(null);

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

function decounce(func, ms) {
	let ts;
	return function() {
		clearTimeout(ts);
		ts = setTimeout(() => func.apply(this, arguments), ms);
	};
}

if (process.env.NODE_ENV !== 'production') {
	const fs = require('fs');

	fs.watch(
		path.resolve('./electron-build'),
		{ encoding: 'buffer' },
		decounce((eventType, filename) => {
			console.log("RELOADING");
			win && win.reload();
		}, 50)
	);
}
