const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('knotzFileTransfers.db');

// Create settings table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS settings (saveLocation TEXT, enableNotifications INTEGER)');

// Create users table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)');

module.exports = db;
