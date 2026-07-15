--==================================================
-- ENKOLAY ZKS PROFESSIONAL
-- SQLITE DATABASE
-- VERSION 1.0
--==================================================

PRAGMA foreign_keys = ON;

--==================================================
-- USERS
--==================================================

CREATE TABLE IF NOT EXISTS users (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    username TEXT NOT NULL UNIQUE,

    password TEXT NOT NULL,

    fullname TEXT NOT NULL,

    role TEXT NOT NULL DEFAULT 'Admin',

    active INTEGER NOT NULL DEFAULT 1,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP

);

--==================================================
-- PERSONNEL
--==================================================

CREATE TABLE IF NOT EXISTS personnel (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    fullname TEXT NOT NULL,

    department TEXT,

    phone TEXT,

    extension TEXT,

    active INTEGER NOT NULL DEFAULT 1,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP

);

--==================================================
-- VISITORS
--==================================================

CREATE TABLE IF NOT EXISTS visitors (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    fullname TEXT NOT NULL,

    phone TEXT,

    identity_type TEXT,

    identity_number TEXT,

    plate TEXT,

    banned INTEGER NOT NULL DEFAULT 0,

    ban_reason TEXT,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP,

    updated_at TEXT

);

--==================================================
-- VISITOR MOVEMENTS
--==================================================

CREATE TABLE IF NOT EXISTS visitor_movements (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    visitor_id INTEGER NOT NULL,

    personnel_id INTEGER NOT NULL,

    card_number TEXT,

    entry_date TEXT,

    entry_time TEXT,

    exit_date TEXT,

    exit_time TEXT,

    status TEXT DEFAULT 'INSIDE',

    description TEXT,

    created_by INTEGER,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(visitor_id)

        REFERENCES visitors(id),

    FOREIGN KEY(personnel_id)

        REFERENCES personnel(id),

    FOREIGN KEY(created_by)

        REFERENCES users(id)

);

--==================================================
-- DEVICES
--==================================================

CREATE TABLE IF NOT EXISTS devices (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    device_name TEXT NOT NULL,

    brand TEXT,

    model TEXT,

    ip_address TEXT,

    port INTEGER,

    connection_type TEXT,

    status INTEGER DEFAULT 0,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP

);

--==================================================
-- SETTINGS
--==================================================

CREATE TABLE IF NOT EXISTS settings (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    company_name TEXT,

    backup_path TEXT,

    language TEXT DEFAULT 'tr',

    theme TEXT DEFAULT 'dark',

    license_key TEXT

);

--==================================================
-- DEFAULT ADMIN
--==================================================

INSERT OR IGNORE INTO users (

    id,

    username,

    password,

    fullname,

    role,

    active

)

VALUES (

    1,

    'admin',

    '123456',

    'System Administrator',

    'Admin',

    1

);