//==================================================
// ENKOLAY ZKS PROFESSIONAL
// LOGIN.JS
//==================================================

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");
    const message = document.getElementById("loginMessage");
    const togglePassword = document.getElementById("togglePassword");

    //==================================================
    // ŞİFRE GÖSTER / GİZLE
    //==================================================

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            password.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

    //==================================================
    // GİRİŞ
    //==================================================

    loginButton.addEventListener("click", login);

    password.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            login();

        }

    });

    //==================================================
    // LOGIN
    //==================================================

    async function login() {

        const user = username.value.trim();
        const pass = password.value.trim();

        if (user === "" || pass === "") {

            message.style.color = "#ff7070";
            message.innerHTML = "Kullanıcı adı ve şifre giriniz.";

            return;

        }

        try {

            const result = await window.api.login(user, pass);

            if (result.success) {

                localStorage.setItem("zks_login", "true");
                localStorage.setItem("zks_user", result.user.username);
                localStorage.setItem("zks_role", result.user.role);

                message.style.color = "#35d07f";
                message.innerHTML = "Giriş başarılı. Yönlendiriliyor...";

                setTimeout(() => {

                    window.location.href = "index.html";

                }, 700);

            } else {

                message.style.color = "#ff7070";
                message.innerHTML = "Kullanıcı adı veya şifre hatalı.";

            }

        } catch (err) {

            console.error(err);

            message.style.color = "#ff7070";
            message.innerHTML = "Veritabanına bağlanılamadı.";

        }

    }

});

//==================================================
// SAAT
//==================================================

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    clock.innerHTML = new Date().toLocaleTimeString("tr-TR");

}

setInterval(updateClock, 1000);
updateClock();