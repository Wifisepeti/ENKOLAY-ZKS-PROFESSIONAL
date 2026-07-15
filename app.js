//==================================================
// ENKOLAY ZKS PROFESSIONAL
// APP.JS
// VERSION 3.0
//==================================================

"use strict";

document.addEventListener("DOMContentLoaded", init);

//==================================================
// INIT
//==================================================

function init() {

    sessionControl();

    startClock();

    menuEvents();

    logoutEvent();

    loadPage("dashboard");

}

//==================================================
// SESSION
//==================================================

function sessionControl() {

    if (localStorage.getItem("zks_login") !== "true") {

        window.location.href = "login.html";
        return;

    }

    const user = localStorage.getItem("zks_user") || "Admin";

    const userName = document.getElementById("userName");

    if (userName) {

        userName.textContent = user;

    }

}

//==================================================
// CLOCK
//==================================================

function startClock() {

    updateClock();

    setInterval(updateClock, 1000);

}

function updateClock() {

    const clock = document.getElementById("clock");

    if (clock) {

        clock.textContent = new Date().toLocaleTimeString("tr-TR");

    }

}

//==================================================
// MENU
//==================================================

function menuEvents() {

    document
        .querySelectorAll(".sidebar-menu li[data-page]")
        .forEach(item => {

            item.addEventListener("click", () => {

                document
                    .querySelectorAll(".sidebar-menu li")
                    .forEach(x => x.classList.remove("active"));

                item.classList.add("active");

                loadPage(item.dataset.page);

            });

        });

}

//==================================================
// PAGE
//==================================================

function loadPage(page) {

    const title = document.getElementById("pageTitle");

    switch (page) {

        case "dashboard":

            title.textContent = "Ana Panel";

            if (typeof loadDashboard === "function") {

                loadDashboard();

            }

            break;

        case "visitors":

            title.textContent = "Ziyaretçi Kayıt";

            if (typeof loadVisitors === "function") {

                loadVisitors();

            }

            break;

        case "employees":

            title.textContent = "Çalışan Tanımlama";

            if (typeof loadEmployees === "function") {

                loadEmployees();

            }

            break;

        case "movements":

            title.textContent = "Ziyaretçi Hareketleri";

            if (typeof loadMovements === "function") {

                loadMovements();

            }

            break;

        case "blacklist":

            title.textContent = "Yasaklı Ziyaretçiler";

            if (typeof loadBlacklist === "function") {

                loadBlacklist();

            }

            break;

        case "devices":

            title.textContent = "Cihaz Tanımlama";

            if (typeof loadDevices === "function") {

                loadDevices();

            }

            break;

        case "reports":

            title.textContent = "Raporlar";

            if (typeof loadReports === "function") {

                loadReports();

            }

            break;

        case "settings":

            title.textContent = "Ayarlar";

            if (typeof loadSettings === "function") {

                loadSettings();

            }

            break;

    }

}

//==================================================
// LOGOUT
//==================================================

function logoutEvent() {

    const logout = document.getElementById("logoutButton");

    if (!logout) return;

    logout.addEventListener("click", () => {

        if (!confirm("Çıkış yapmak istiyor musunuz?")) return;

        localStorage.removeItem("zks_login");
        localStorage.removeItem("zks_user");
        localStorage.removeItem("zks_role");

        window.location.href = "login.html";

    });

}