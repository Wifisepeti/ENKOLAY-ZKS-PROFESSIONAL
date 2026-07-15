//==================================================
// ENKOLAY ZKS PROFESSIONAL
// ROUTER.JS
// VERSION 1.0
//==================================================

"use strict";

const Router={

    //------------------------------------------
    // SAYFA DEĞİŞTİR
    //------------------------------------------

    open(page){

        switch(page){

            case "dashboard":

                document.getElementById("pageTitle").textContent="Dashboard";

                Dashboard.load();

            break;

            case "visitors":

                document.getElementById("pageTitle").textContent="Ziyaretçiler";

                Visitors.load();

            break;

            case "employees":

                document.getElementById("pageTitle").textContent="Çalışan Tanımlama";

                Employees.load();

            break;

            case "devices":

                document.getElementById("pageTitle").textContent="Cihaz Tanımlama";

                Devices.load();

            break;

            case "movements":

                document.getElementById("pageTitle").textContent="Hareketler";

                Movements.load();

            break;

            case "reports":

                document.getElementById("pageTitle").textContent="Raporlar";

                Reports.load();

            break;

            case "settings":

                document.getElementById("pageTitle").textContent="Ayarlar";

                Settings.load();

            break;

        }

    }

};