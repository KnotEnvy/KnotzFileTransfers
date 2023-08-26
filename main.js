const { app, BrowserWindow, ipcMain } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('knotzfiletransfers.db');

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Database functions (e.g., registering a user, saving settings, etc.)
// This will create a users table if it doesn't exist
ipcMain.handle('registerUser', async (event, username, password) => {
  return new Promise((resolve, reject) => {
    db.run('CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)', function(createError) {
      if (createError) {
        return reject('Error creating table!');
      }

      db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(insertError) {
        if (insertError) {
          return reject('Error saving user!');
        } else {
          return resolve('User saved successfully!');
        }
      });
    });
  });
});

//this creates the login call
ipcMain.handle('loginUser', (event, username, password) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, row) {
      if (error) {
        reject('Error logging in!');
      } else if (row) {
        resolve('Logged in successfully!');
      } else {
        reject('Invalid username or password');
      }
    });
  });
});

// This will create a settings table if it doesn't exist
ipcMain.handle('saveSettings', (event, saveLocation, enableNotifications) => {
  db.run('CREATE TABLE IF NOT EXISTS settings (saveLocation TEXT, enableNotifications INTEGER)');
  db.run('INSERT INTO settings (saveLocation, enableNotifications) VALUES (?, ?)', [saveLocation, enableNotifications], function(error) {
    if (error) {
      return 'Error saving settings!';
    } else {
      return 'Settings saved successfully!';
    }
  });
});
// adding new transfers
ipcMain.handle('insertTransfer', (event, filename, size, progress, status) => {
  db.run('CREATE TABLE IF NOT EXISTS transfers (filename TEXT, size INTEGER, progress INTEGER, status TEXT)');
  db.run('INSERT INTO transfers (filename, size, progress, status) VALUES (?, ?, ?, ?)', [filename, size, progress, status], function(error) {
      if (error) {
          return 'Error inserting transfer!';
      } else {
          return 'Transfer inserted successfully!';
      }
  });
});
// Fetching ongoing transfers
ipcMain.handle('getOngoingTransfers', async () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM transfers WHERE status != "Completed"', [], (error, rows) => {
      if (error) {
        reject('Error fetching ongoing transfers!');
      } else {
        resolve(rows);
      }
    });
  });
});




// Add other database functions as needed
module.exports = db;
