//==================================================
// ENKOLAY ZKS PROFESSIONAL
// AUTH.JS
// VERSION 2.0
//==================================================

"use strict";

const db = require("../database");

//==================================================
// LOGIN
//==================================================

function login(username, password) {

    try {

        const user = db.prepare(`

            SELECT
                id,
                username,
                role

            FROM users

            WHERE
                username = ?
            AND
                password = ?

            LIMIT 1

        `).get(

            username,
            password

        );

        if(user){

            return {

                success: true,

                user: {

                    id: user.id,

                    username: user.username,

                    role: user.role

                }

            };

        }

        return {

            success: false,

            message: "Kullanıcı adı veya şifre hatalı."

        };

    }
    catch(err){

        console.error("AUTH LOGIN ERROR :", err);

        return {

            success: false,

            message: err.message

        };

    }

}

//==================================================
// CHANGE PASSWORD
//==================================================

function changePassword(

    username,
    newPassword

){

    try{

        const result = db.prepare(`

            UPDATE users

            SET password = ?

            WHERE username = ?

        `).run(

            newPassword,

            username

        );

        return result.changes > 0;

    }
    catch(err){

        console.error("CHANGE PASSWORD :", err);

        return false;

    }

}

//==================================================
// GET USER
//==================================================

function getUser(username){

    try{

        return db.prepare(`

            SELECT
                id,
                username,
                role,
                created_at

            FROM users

            WHERE username = ?

            LIMIT 1

        `).get(

            username

        );

    }
    catch(err){

        console.error("GET USER :", err);

        return null;

    }

}

//==================================================
// ADD USER
//==================================================

function addUser(

    username,
    password,
    role = "User"

){

    try{

        db.prepare(`

            INSERT INTO users(

                username,
                password,
                role,
                created_at

            )

            VALUES(

                ?,
                ?,
                ?,
                datetime('now','localtime')

            )

        `).run(

            username,
            password,
            role

        );

        return true;

    }
    catch(err){

        console.error("ADD USER :", err);

        return false;

    }

}

//==================================================
// DELETE USER
//==================================================

function deleteUser(username){

    try{

        const result = db.prepare(`

            DELETE FROM users

            WHERE username = ?

        `).run(

            username

        );

        return result.changes > 0;

    }
    catch(err){

        console.error("DELETE USER :", err);

        return false;

    }

}

//==================================================
// EXPORT
//==================================================

module.exports = {

    login,

    changePassword,

    getUser,

    addUser,

    deleteUser

};
