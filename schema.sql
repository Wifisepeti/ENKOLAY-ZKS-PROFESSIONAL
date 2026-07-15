CREATE TABLE visitors (

id INTEGER PRIMARY KEY AUTOINCREMENT,

fullname TEXT NOT NULL,

phone TEXT,

tc TEXT,

company TEXT,

plate TEXT,

card_number TEXT,

host_id INTEGER,

visit_reason TEXT,

entry_time TEXT,

exit_time TEXT,

status INTEGER DEFAULT 1,

created_at TEXT

);
CREATE TABLE personnel (

id INTEGER PRIMARY KEY AUTOINCREMENT,

fullname TEXT,

department TEXT,

phone TEXT,

extension TEXT,

email TEXT,

company TEXT,

active INTEGER DEFAULT 1

);
CREATE TABLE companies (

id INTEGER PRIMARY KEY AUTOINCREMENT,

company_name TEXT,

tax_number TEXT,

phone TEXT,

address TEXT,

contact_person TEXT

);
CREATE TABLE cards (

id INTEGER PRIMARY KEY AUTOINCREMENT,

card_number TEXT UNIQUE,

status INTEGER,

description TEXT

);
CREATE TABLE devices (

id INTEGER PRIMARY KEY AUTOINCREMENT,

device_name TEXT,

ip TEXT,

port INTEGER,

model TEXT,

serial TEXT,

status INTEGER

);
CREATE TABLE users (

id INTEGER PRIMARY KEY AUTOINCREMENT,

username TEXT UNIQUE,

password TEXT,

fullname TEXT,

role TEXT,

active INTEGER

);
CREATE TABLE logs (

id INTEGER PRIMARY KEY AUTOINCREMENT,

event TEXT,

user TEXT,

date TEXT

);
CREATE TABLE settings (

id INTEGER PRIMARY KEY,

company_name TEXT,

license_key TEXT,

license_end TEXT

);



