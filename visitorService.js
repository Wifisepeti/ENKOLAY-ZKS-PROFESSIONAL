//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORSERVICE.JS
// VERSION 1.0
//==================================================

"use strict";

const db = require("../database");

//==================================================
// SAVE
//==================================================

function save(visitor){

    try{

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

        return {

            success:true,
            id:result.lastInsertRowid

        };

    }
    catch(err){

        console.error(err);

        return {

            success:false,
            message:err.message

        };

    }

}

//==================================================
// LIST
//==================================================

function list(){

    return db.prepare(`

        SELECT *

        FROM visitors

        ORDER BY id DESC

    `).all();

}

//==================================================
// UPDATE
//==================================================

function update(visitor){

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

    return { success:true };

}

//==================================================
// DELETE
//==================================================

function remove(id){

    db.prepare(

        "DELETE FROM visitors WHERE id=?"

    ).run(id);

    return { success:true };

}

//==================================================
// EXPORT
//==================================================

module.exports = {

    save,
    list,
    update,
    remove

};