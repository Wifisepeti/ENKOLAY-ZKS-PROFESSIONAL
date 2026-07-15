//==================================================
// ENKOLAY ZKS PROFESSIONAL
// PRELOAD.JS
// VERSION 4.0
//==================================================

"use strict";

const {

    contextBridge,
    ipcRenderer

} = require("electron");

//==================================================
// API
//==================================================

contextBridge.exposeInMainWorld(

    "api",

    {

        //==========================================
        // LOGIN
        //==========================================

        login:(username,password)=>{

            return ipcRenderer.invoke(

                "login",

                username,

                password

            );

        },

        //==========================================
        // LOGOUT
        //==========================================

        logout:()=>{

            return ipcRenderer.invoke(

                "logout"

            );

        },

        //==========================================
        // USER
        //==========================================

        getUser:(username)=>{

            return ipcRenderer.invoke(

                "get-user",

                username

            );

        },

        //==========================================
        // VISITORS
        //==========================================

        saveVisitor:(visitor)=>{

            return ipcRenderer.invoke(

                "visitor-save",

                visitor

            );

        },

        listVisitors:()=>{

            return ipcRenderer.invoke(

                "visitor-list"

            );

        },

        getTodayVisitors:()=>{

            return ipcRenderer.invoke(

                "visitor-list"

            );

        },

        updateVisitor:(visitor)=>{

            return ipcRenderer.invoke(

                "visitor-update",

                visitor

            );

        },

        deleteVisitor:(id)=>{

            return ipcRenderer.invoke(

                "visitor-delete",

                id

            );

        },

        visitorExit:(id)=>{

            return ipcRenderer.invoke(

                "visitor-exit",

                id

            );

        },

        //==========================================
        // EMPLOYEES
        //==========================================

        saveEmployee:(employee)=>{

            return ipcRenderer.invoke(

                "employee-save",

                employee

            );

        },

        listEmployees:()=>{

            return ipcRenderer.invoke(

                "employee-list"

            );

        },

        updateEmployee:(employee)=>{

            return ipcRenderer.invoke(

                "employee-update",

                employee

            );

        },

        deleteEmployee:(id)=>{

            return ipcRenderer.invoke(

                "employee-delete",

                id

            );

        },

        //==========================================
        // MOVEMENTS
        //==========================================

        listMovements:()=>{

            return ipcRenderer.invoke(

                "movement-list"

            );

        },

        //==========================================
        // DASHBOARD
        //==========================================

        getDashboardData:()=>{

            return ipcRenderer.invoke(

                "dashboard-data"

            );

        },

        //==========================================
        // DATABASE
        //==========================================

        testDatabase:()=>{

            return ipcRenderer.invoke(

                "database-test"

            );

        }

    }

);