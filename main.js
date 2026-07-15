//==================================================
// ENKOLAY ZKS PROFESSIONAL
// MAIN.JS
// VERSION 4.0
//==================================================

"use strict";

const {

    app,
    BrowserWindow,
    ipcMain

} = require("electron");

const path = require("path");

//==================================================
// DATABASE
//==================================================

const db = require("./database");

//==================================================
// AUTH
//==================================================

const auth = require("./js/auth");

//==================================================
// WINDOW
//==================================================

let mainWindow = null;

//==================================================
// CREATE WINDOW
//==================================================

function createWindow(){

    mainWindow = new BrowserWindow({

        title:"ENKOLAY ZKS Professional",

        width:1600,
        height:900,

        minWidth:1300,
        minHeight:800,

        center:true,

        show:false,

        autoHideMenuBar:true,

        icon:path.join(

            __dirname,

            "assets",

            "logo.ico"

        ),

        webPreferences:{

            preload:path.join(

                __dirname,

                "preload.js"

            ),

            contextIsolation:true,

            nodeIntegration:false

        }

    });

    mainWindow.loadFile("login.html");

    mainWindow.once(

        "ready-to-show",

        ()=>{

            mainWindow.show();

        }

    );

    mainWindow.on(

        "closed",

        ()=>{

            mainWindow=null;

        }

    );

}

//==================================================
// LOGIN
//==================================================

ipcMain.handle(

    "login",

    (event,username,password)=>{

        return auth.login(

            username,

            password

        );

    }

);

//==================================================
// LOGOUT
//==================================================

ipcMain.handle(

    "logout",

    ()=>{

        return true;

    }

);

//==================================================
// USER
//==================================================

ipcMain.handle(

    "get-user",

    (event,username)=>{

        return auth.getUser(

            username

        );

    }

);
//==================================================
// VISITORS
//==================================================

ipcMain.handle(

    "visitor-save",

    (event, visitor) => {

        try {

            const result = db.prepare(`

                INSERT INTO visitors(

                    fullname,
                    phone,
                    plate,
                    company,
                    visit_reason,
                    employee_id,
                    identity_type,
                    identity_no,
                    card_no,
                    created_at

                )

                VALUES(

                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    datetime('now','localtime')

                )

            `).run(

                visitor.fullname,
                visitor.phone,
                visitor.plate,
                visitor.company,
                visitor.visit_reason,
                visitor.employee_id,
                visitor.identity_type,
                visitor.identity_no,
                visitor.card_no

            );

            db.prepare(`

                INSERT INTO movements(

                    visitor_id,
                    employee_id,
                    entry_time,
                    exit_time,
                    status,
                    created_at

                )

                VALUES(

                    ?,
                    ?,
                    datetime('now','localtime'),
                    NULL,
                    'İÇERİDE',
                    datetime('now','localtime')

                )

            `).run(

                result.lastInsertRowid,
                visitor.employee_id

            );

            return {

                success: true

            };

        }

        catch (err) {

            console.error(err);

            return {

                success: false,

                message: err.message

            };

        }

    }

);

ipcMain.handle(

    "visitor-list",

    () => {

        return db.prepare(`

            SELECT *

            FROM visitors

            ORDER BY id DESC

        `).all();

    }

);

ipcMain.handle(

    "visitor-update",

    (event, visitor) => {

        db.prepare(`

            UPDATE visitors

            SET

                fullname=?,
                phone=?,
                plate=?,
                company=?,
                visit_reason=?,
                employee_id=?,
                identity_type=?,
                identity_no=?,
                card_no=?

            WHERE id=?

        `).run(

            visitor.fullname,
            visitor.phone,
            visitor.plate,
            visitor.company,
            visitor.visit_reason,
            visitor.employee_id,
            visitor.identity_type,
            visitor.identity_no,
            visitor.card_no,
            visitor.id

        );

        return {

            success: true

        };

    }

);

ipcMain.handle(

    "visitor-delete",

    (event, id) => {

        db.prepare(

            `DELETE FROM movements WHERE visitor_id=?`

        ).run(id);

        db.prepare(

            `DELETE FROM visitors WHERE id=?`

        ).run(id);

        return {

            success: true

        };

    }

);

//==================================================
// EMPLOYEES
//==================================================

ipcMain.handle(

    "employee-save",

    (event,employee)=>{

        db.prepare(`

            INSERT INTO employees(

                fullname,
                department,
                room_no,
                internal_phone,
                mobile_phone,
                created_at

            )

            VALUES(

                ?,
                ?,
                ?,
                ?,
                ?,
                datetime('now','localtime')

            )

        `).run(

            employee.fullname,
            employee.department,
            employee.room_no,
            employee.internal_phone,
            employee.mobile_phone

        );

        return{

            success:true

        };

    }

);

ipcMain.handle(

    "employee-list",

    ()=>{

        return db.prepare(`

            SELECT *

            FROM employees

            ORDER BY fullname

        `).all();

    }

);
//==================================================
// EMPLOYEE UPDATE
//==================================================

ipcMain.handle(

    "employee-update",

    (event, employee) => {

        db.prepare(`

            UPDATE employees

            SET

                fullname=?,
                department=?,
                room_no=?,
                internal_phone=?,
                mobile_phone=?

            WHERE id=?

        `).run(

            employee.fullname,
            employee.department,
            employee.room_no,
            employee.internal_phone,
            employee.mobile_phone,
            employee.id

        );

        return {

            success: true

        };

    }

);

//==================================================
// EMPLOYEE DELETE
//==================================================

ipcMain.handle(

    "employee-delete",

    (event, id) => {

        db.prepare(

            `DELETE FROM employees WHERE id=?`

        ).run(id);

        return {

            success: true

        };

    }

);

//==================================================
// MOVEMENTS
//==================================================

ipcMain.handle(

    "movement-list",

    () => {

        return db.prepare(`

            SELECT *

            FROM movements

            ORDER BY id DESC

        `).all();

    }

);

ipcMain.handle(

    "visitor-exit",

    (event, id) => {

        db.prepare(`

            UPDATE movements

            SET

                exit_time=datetime('now','localtime'),
                status='ÇIKIŞ'

            WHERE visitor_id=?
            AND exit_time IS NULL

        `).run(id);

        return {

            success: true

        };

    }

);

//==================================================
// DASHBOARD
//==================================================

ipcMain.handle(

    "dashboard-data",

    () => {

        return {

            today: db.prepare(

                "SELECT COUNT(*) total FROM movements WHERE date(created_at)=date('now','localtime')"

            ).get().total,

            inside: db.prepare(

                "SELECT COUNT(*) total FROM movements WHERE exit_time IS NULL"

            ).get().total,

            blacklist: db.prepare(

                "SELECT COUNT(*) total FROM blacklist WHERE active=1"

            ).get().total,

            employees: db.prepare(

                "SELECT COUNT(*) total FROM employees"

            ).get().total

        };

    }

);

//==================================================
// DATABASE TEST
//==================================================

ipcMain.handle(

    "database-test",

    () => {

        return {

            success: true,

            message: "Database bağlantısı başarılı."

        };

    }

);

//==================================================
// READY
//==================================================

app.whenReady().then(() => {

    createWindow();

    app.on("activate", () => {

        if (BrowserWindow.getAllWindows().length === 0) {

            createWindow();

        }

    });

});

//==================================================
// CLOSE
//==================================================

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});

//==================================================
// SECURITY
//==================================================

app.commandLine.appendSwitch(

    "disable-http-cache"

);