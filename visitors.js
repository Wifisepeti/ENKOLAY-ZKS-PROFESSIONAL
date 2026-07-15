//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORS.JS
// PART 1
//==================================================

"use strict";

//==================================================
// PAGE
//==================================================

function loadVisitors(){

    const content=document.getElementById("content");

    content.innerHTML=`

    <div class="page-header">

        <div>

            <h2>

                <i class="fa-solid fa-id-card"></i>

                Ziyaretçi Kayıt

            </h2>

            <span>

                Yeni ziyaretçi oluşturun

            </span>

        </div>

        <div class="page-status">

            <i class="fa-solid fa-circle"></i>

            Yeni Kayıt

        </div>

    </div>

    <div class="card visitor-card">

        <div class="form-grid-2">

            <div class="form-group">

                <label>Ad Soyad</label>

                <input
                    id="fullname"
                    type="text"
                    placeholder="Ad Soyad">

            </div>

            <div class="form-group">

                <label>Telefon</label>

                <input
                    id="phone"
                    type="text"
                    placeholder="05xx xxx xx xx">

            </div>

            <div class="form-group">

                <label>Plaka</label>

                <input
                    id="plate"
                    type="text"
                    placeholder="06 ABC 123">

            </div>

            <div class="form-group">

                <label>Firma</label>

                <input
                    id="company"
                    type="text"
                    placeholder="Firma">

            </div>

            <div class="form-group">

                <label>Kime Geldiği</label>

                <input
                    id="employee"
                    type="text"
                    placeholder="Çalışan ara...">

            </div>

            <div class="form-group">

                <label>Ziyaretçi Kartı</label>

                <select id="cardNo">

                    <option value="">Kart Seçiniz</option>
                    <option value="1">Kart 1</option>
                    <option value="2">Kart 2</option>
                    <option value="3">Kart 3</option>
                    <option value="4">Kart 4</option>

                </select>

            </div>

            <div class="form-group full">

                <label>Ziyaret Sebebi</label>

                <textarea
                    id="visitReason"
                    rows="3"
                    placeholder="Ziyaret sebebi..."></textarea>

            </div>

            <div class="form-group full">

                <label>Kimlik Bilgisi</label>

                <div class="identity-row">

                    <select id="identityType">

                        <option value="TC">TC Kimlik No</option>
                        <option value="PASSPORT">Pasaport No</option>
                        <option value="LICENSE">Ehliyet No</option>

                    </select>

                    <input
                        id="identityNo"
                        type="text"
                        placeholder="Numara Giriniz">

                </div>

            </div>

        </div>

        <div class="button-bar">

            <button
                class="btn btn-primary"
                onclick="saveVisitor()">

                <i class="fa-solid fa-floppy-disk"></i>

                Kaydet

            </button>

            <button
                class="btn btn-secondary"
                onclick="clearVisitorForm()">

                <i class="fa-solid fa-trash"></i>

                Temizle

            </button>

            <button
                class="btn btn-warning"
                onclick="visitorExit()">

                <i class="fa-solid fa-arrow-right-from-bracket"></i>

                Çıkış Yap

            </button>

            <button
                class="btn btn-danger"
                onclick="addBlacklist()">

                <i class="fa-solid fa-ban"></i>

                Yasaklı Yap

            </button>

        </div>

    </div>

    <div class="card">

        <h3>

            Son İşlemler

        </h3>

        <div class="table-container">

            <table>

                <thead>

                    <tr>

                        <th>Saat</th>
                        <th>Ad Soyad</th>
                        <th>Firma</th>
                        <th>Kart</th>
                        <th>Durum</th>

                    </tr>

                </thead>

                <tbody id="visitorTable">

                    <tr>

                        <td colspan="5"
                            style="text-align:center;padding:35px;">

                            Henüz kayıt bulunmuyor.

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    </div>

    `;

}
//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORS.JS
// PART 2
//==================================================

"use strict";

//==================================================
// FORM VERİLERİNİ AL
//==================================================

function getVisitorData(){

    return{

        fullname:
            document.getElementById("fullname").value.trim(),

        phone:
            document.getElementById("phone").value.trim(),

        plate:
            document.getElementById("plate").value.trim().toUpperCase(),

        company:
            document.getElementById("company").value.trim(),

        employee:
            document.getElementById("employee").value.trim(),

        cardNo:
            document.getElementById("cardNo").value,

        visitReason:
            document.getElementById("visitReason").value.trim(),

        identityType:
            document.getElementById("identityType").value,

        identityNo:
            document.getElementById("identityNo").value.trim()

    };

}

//==================================================
// FORM KONTROL
//==================================================

function validateVisitor(data){

    if(data.fullname===""){

        alert("Ad Soyad boş bırakılamaz.");

        return false;

    }

    if(data.phone===""){

        alert("Telefon giriniz.");

        return false;

    }

    if(data.employee===""){

        alert("Kime geldiğini seçiniz.");

        return false;

    }

    if(data.cardNo===""){

        alert("Ziyaretçi kartı seçiniz.");

        return false;

    }

    if(data.identityNo===""){

        alert("Kimlik numarasını giriniz.");

        return false;

    }

    return true;

}

//==================================================
// KAYDET
//==================================================

async function saveVisitor(){

    const visitor=getVisitorData();

    if(!validateVisitor(visitor)){

        return;

    }

    console.log(visitor);

    /*
        PART 3

        const result =
        await window.api.saveVisitor(visitor);

    */

    alert("SQLite bağlantısı PART 3'te eklenecek.");

}

//==================================================
// FORMU TEMİZLE
//==================================================

function clearVisitorForm(){

    document.getElementById("fullname").value="";
    document.getElementById("phone").value="";
    document.getElementById("plate").value="";
    document.getElementById("company").value="";
    document.getElementById("employee").value="";
    document.getElementById("visitReason").value="";
    document.getElementById("identityNo").value="";

    document.getElementById("cardNo").selectedIndex=0;
    document.getElementById("identityType").selectedIndex=0;

}

//==================================================
// KART KONTROL
//==================================================

function checkVisitorCard(cardNo){

    console.log("Kart kontrol :",cardNo);

    return true;

}

//==================================================
// ÇALIŞAN ARAMA
//==================================================

function searchEmployee(text){

    console.log("Çalışan ara :",text);

}
//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORS.JS
// PART 3
//==================================================

"use strict";

//==================================================
// SAVE VISITOR
//==================================================

async function saveVisitor(){

    const visitor=getVisitorData();

    if(!validateVisitor(visitor)){

        return;

    }

    try{

        const result=await window.api.saveVisitor(visitor);

        if(result.success){

            alert("Ziyaretçi başarıyla kaydedildi.");

            clearVisitorForm();

            loadVisitorHistory();

        }
        else{

            alert(result.message);

        }

    }
    catch(err){

        console.error(err);

        alert("Veritabanına kayıt yapılamadı.");

    }

}

//==================================================
// SON İŞLEMLER
//==================================================

async function loadVisitorHistory(){

    try{

        const visitors=

        await window.api.getTodayVisitors();

        const tbody=

        document.getElementById("visitorTable");

        if(!tbody) return;

        if(visitors.length===0){

            tbody.innerHTML=`

            <tr>

                <td colspan="5"
                style="text-align:center;padding:30px;">

                Henüz kayıt bulunmuyor.

                </td>

            </tr>

            `;

            return;

        }

        tbody.innerHTML="";

        visitors.forEach(item=>{

            tbody.innerHTML+=`

            <tr>

                <td>${item.created_at}</td>

                <td>${item.fullname}</td>

                <td>${item.company}</td>

                <td>${item.card_no}</td>

                <td>

                    <span class="badge success">

                        İçeride

                    </span>

                </td>

            </tr>

            `;

        });

    }
    catch(err){

        console.error(err);

    }

}

//==================================================
// SAYFA AÇILDIĞINDA
//==================================================

setTimeout(()=>{

    if(document.getElementById("visitorTable")){

        loadVisitorHistory();

    }

},100);


//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORS.JS
// PART 2
//==================================================

"use strict";

//==================================================
// FORM VERİLERİNİ AL
//==================================================

function getVisitorData(){

    return{

        fullname:
            document.getElementById("fullname").value.trim(),

        phone:
            document.getElementById("phone").value.trim(),

        plate:
            document.getElementById("plate").value.trim().toUpperCase(),

        company:
            document.getElementById("company").value.trim(),

        employee_id:0,

        card_no:
            document.getElementById("cardNo").value,

        visit_reason:
            document.getElementById("visitReason").value.trim(),

        identity_type:
            document.getElementById("identityType").value,

        identity_no:
            document.getElementById("identityNo").value.trim()

    };

}

//==================================================
// FORM KONTROL
//==================================================

function validateVisitor(data){

    if(data.fullname===""){

        alert("Ad Soyad boş bırakılamaz.");

        return false;

    }

    if(data.phone===""){

        alert("Telefon giriniz.");

        return false;

    }

    if(document.getElementById("employee").value.trim()===""){

        alert("Kime geldiğini giriniz.");

        return false;

    }

    if(data.card_no===""){

        alert("Kart seçiniz.");

        return false;

    }

    if(data.identity_no===""){

        alert("Kimlik numarası giriniz.");

        return false;

    }

    return true;

}

//==================================================
// KAYDET
//==================================================

async function saveVisitor(){

    const visitor=getVisitorData();

    if(!validateVisitor(visitor)){

        return;

    }

    try{

        const result=
        await window.api.saveVisitor(visitor);

        if(result.success){

            alert("Ziyaretçi başarıyla kaydedildi.");

            clearVisitorForm();

            loadVisitorHistory();

            if(typeof loadDashboard==="function"){

                loadDashboard();

            }

        }

        else{

            alert(result.message);

        }

    }

    catch(err){

        console.error(err);

        alert("Veritabanına kayıt yapılamadı.");

    }

}
//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORS.JS
// PART 3
//==================================================

"use strict";

//==================================================
// SON İŞLEMLER
//==================================================

async function loadVisitorHistory(){

    try{

        const visitors=await window.api.listVisitors();

        const tbody=document.getElementById("visitorTable");

        if(!tbody) return;

        if(!visitors || visitors.length===0){

            tbody.innerHTML=`

                <tr>

                    <td colspan="5"
                    style="text-align:center;padding:35px;">

                        Henüz kayıt bulunmuyor.

                    </td>

                </tr>

            `;

            return;

        }

        tbody.innerHTML="";

        visitors.slice(0,10).forEach(item=>{

            tbody.innerHTML+=`

                <tr>

                    <td>${item.created_at || "-"}</td>

                    <td>${item.fullname || "-"}</td>

                    <td>${item.company || "-"}</td>

                    <td>${item.card_no || "-"}</td>

                    <td>

                        <span class="badge success">

                            İçeride

                        </span>

                    </td>

                </tr>

            `;

        });

    }

    catch(err){

        console.error(err);

    }

}

//==================================================
// FORM TEMİZLE
//==================================================

function clearVisitorForm(){

    document.getElementById("fullname").value="";
    document.getElementById("phone").value="";
    document.getElementById("plate").value="";
    document.getElementById("company").value="";
    document.getElementById("employee").value="";
    document.getElementById("visitReason").value="";
    document.getElementById("identityNo").value="";

    document.getElementById("cardNo").selectedIndex=0;
    document.getElementById("identityType").selectedIndex=0;

}

//==================================================
// KART KONTROL
//==================================================

function checkVisitorCard(cardNo){

    console.log("Kart :",cardNo);

    return true;

}

//==================================================
// ÇALIŞAN ARAMA
//==================================================

function searchEmployee(text){

    console.log("Çalışan :",text);

}
//==================================================
// ENKOLAY ZKS PROFESSIONAL
// VISITORS.JS
// PART 4
//==================================================

"use strict";

//==================================================
// ÇIKIŞ
//==================================================

function visitorExit(){

    alert("Ziyaretçi çıkış işlemi sonraki sürümde eklenecek.");

}

//==================================================
// YASAKLI LİSTE
//==================================================

function addBlacklist(){

    alert("Yasaklı liste özelliği sonraki sürümde eklenecek.");

}

//==================================================
// EXPORT
//==================================================

function exportVisitors(){

    alert("Excel / PDF export yakında eklenecek.");

}

//==================================================
// IMPORT
//==================================================

function importVisitors(){

    alert("Import özelliği yakında eklenecek.");

}

//==================================================
// SAYFA YÜKLENDİ
//==================================================

document.addEventListener("DOMContentLoaded",()=>{

    if(document.getElementById("visitorTable")){

        loadVisitorHistory();

    }

});

//==================================================
// SAYFA HER AÇILDIĞINDA
//==================================================

const oldLoadVisitors=loadVisitors;

loadVisitors=function(){

    oldLoadVisitors();

    setTimeout(()=>{

        loadVisitorHistory();

    },100);

};

//==================================================
// DASHBOARD GÜNCELLE
//==================================================

async function refreshDashboard(){

    try{

        if(typeof loadDashboard==="function"){

            loadDashboard();

        }

    }

    catch(err){

        console.error(err);

    }

}

//==================================================
// HAREKETLERİ GÜNCELLE
//==================================================

async function refreshMovements(){

    try{

        if(typeof loadMovements==="function"){

            loadMovements();

        }

    }

    catch(err){

        console.error(err);

    }

}