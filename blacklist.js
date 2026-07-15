//==================================================
// ENKOLAY ZKS PROFESSIONAL
// BLACKLIST.JS
//==================================================

"use strict";

function loadBlacklist(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="page-header">

    <div>

        <h2>

            <i class="fa-solid fa-ban"></i>

            Yasaklı Ziyaretçiler

        </h2>

        <span>

            Yasaklı ziyaretçileri görüntüleyin ve yönetin

        </span>

    </div>

    <div class="page-status">

        <i class="fa-solid fa-users-slash"></i>

        Toplam 0 Kişi

    </div>

</div>


<div class="dashboard-cards">

<div class="stat-card">

<i class="fa-solid fa-users-slash"></i>

<h3>Toplam Yasaklı</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-calendar-day"></i>

<h3>Bugün Eklenen</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-user-check"></i>

<h3>Kaldırılan</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-circle-exclamation"></i>

<h3>Aktif Yasak</h3>

<h1>0</h1>

</div>

</div>


<div class="card">

<div
style="
display:flex;
justify-content:space-between;
align-items:center;
gap:20px;
flex-wrap:wrap;
">

<input
type="text"
placeholder="🔍 Ad Soyad, Telefon veya Plaka Ara..."
style="
width:380px;
">

<div class="button-bar"
style="margin:0;">

<button class="btn btn-primary">

<i class="fa-solid fa-magnifying-glass"></i>

Ara

</button>

<button class="btn btn-secondary">

<i class="fa-solid fa-broom"></i>

Temizle

</button>

<button class="btn btn-danger">

<i class="fa-solid fa-file-pdf"></i>

PDF

</button>

<button class="btn btn-success">

<i class="fa-solid fa-file-excel"></i>

Excel

</button>

</div>

</div>

</div>


<div class="card">

<h3>

Yasaklı Ziyaretçi Listesi

</h3>

<div class="table-container">

<table>

<thead>

<tr>

<th>Ad Soyad</th>

<th>Telefon</th>

<th>Plaka</th>

<th>Yasak Tarihi</th>

<th>Yasak Sebebi</th>

<th>İşlem</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="6"
style="
text-align:center;
padding:60px;
">

Henüz yasaklı ziyaretçi bulunmuyor.

</td>

</tr>

</tbody>

</table>

</div>

</div>

`;

}