//==================================================
// ENKOLAY ZKS PROFESSIONAL
// DATABASE.JS
//==================================================

"use strict";

const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

//==================================================
// DATABASE KLASÖRÜ
//==================================================

const databaseFolder = path.join(
    __dirname,
    "database"
);

if (!fs.existsSync(databaseFolder)) {

    fs.mkdirSync(databaseFolder);

}

//==================================================
// DATABASE
//==================================================

const databaseFile = path.join(
    databaseFolder,
    "database.db"
);

const db = new Database(databaseFile);

//==================================================
// SQLITE
//==================================================

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

//==================================================
// USERS
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS users(

id INTEGER PRIMARY KEY AUTOINCREMENT,

username TEXT UNIQUE,

password TEXT,

role TEXT,

created_at TEXT

)

`).run();

//==================================================
// EMPLOYEES
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS employees(

id INTEGER PRIMARY KEY AUTOINCREMENT,

fullname TEXT,

department TEXT,

room_no TEXT,

internal_phone TEXT,

mobile_phone TEXT,

created_at TEXT

)

`).run();

//==================================================
// VISITORS
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS visitors(

id INTEGER PRIMARY KEY AUTOINCREMENT,

fullname TEXT,

phone TEXT,

plate TEXT,

company TEXT,

visit_reason TEXT,

employee_id INTEGER,

identity_type TEXT,

identity_no TEXT,

card_no TEXT,

created_at TEXT

)

`).run();

//==================================================
// MOVEMENTS
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS movements(

id INTEGER PRIMARY KEY AUTOINCREMENT,

visitor_id INTEGER,

employee_id INTEGER,

entry_time TEXT,

exit_time TEXT,

status TEXT,

created_at TEXT

)

`).run();

//==================================================
// BLACKLIST
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS blacklist(

id INTEGER PRIMARY KEY AUTOINCREMENT,

visitor_id INTEGER,

reason TEXT,

blacklist_date TEXT,

active INTEGER

)

`).run();

//==================================================
// CARDS
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS cards(

id INTEGER PRIMARY KEY AUTOINCREMENT,

card_no TEXT UNIQUE,

status TEXT,

visitor_id INTEGER

)

`).run();

//==================================================
// SETTINGS
//==================================================

db.prepare(`

CREATE TABLE IF NOT EXISTS settings(

id INTEGER PRIMARY KEY AUTOINCREMENT,

license_key TEXT,

auto_backup INTEGER,

backup_on_start INTEGER,

database_version TEXT

)

`).run();

//==================================================
// ADMIN
//==================================================

const admin = db.prepare(

`SELECT * FROM users WHERE username=?`

).get("admin");

if (!admin) {

    db.prepare(

`INSERT INTO users
(username,password,role,created_at)

VALUES
(?,?,?,datetime('now','localtime'))`

    ).run(

        "admin",
        "123456",
        "Administrator"

    );

}

//==================================================
// KARTLAR
//==================================================

const count = db.prepare(

"SELECT COUNT(*) total FROM cards"

).get();

if (count.total === 0) {

    const insert = db.prepare(

`INSERT INTO cards
(card_no,status)

VALUES
(?,?)`

    );

    for (let i = 1; i <= 100; i++) {

        insert.run(

            String(i),

            "FREE"

        );

    }

}

console.log("==================================");
console.log("ENKOLAY ZKS DATABASE READY");
console.log(databaseFile);
console.log("==================================");

module.exports = db;