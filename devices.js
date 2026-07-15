//==================================================
// ENKOLAY ZKS PROFESSIONAL
// DEVICES.JS
//==================================================

"use strict";

function loadDevices(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="page-header">

    <div>

        <h2>

            <i class="fa-solid fa-server"></i>

            Cihaz Tanımlama

        </h2>

        <span>

            TCP/IP cihaz yönetimi

        </span>

    </div>

    <div class="page-status">

        <i class="fa-solid fa-microchip"></i>

        Toplam 0 Cihaz

    </div>

</div>



<div class="dashboard-cards">

<div class="stat-card">

<i class="fa-solid fa-server"></i>

<h3>Toplam Cihaz</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-network-wired"></i>

<h3>Bağlı</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-circle-xmark"></i>

<h3>Çevrimdışı</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-code"></i>

<h3>Geliştiriliyor</h3>

<h1>1</h1>

</div>

</div>



<div class="card">

<h3>

<i class="fa-solid fa-circle-info"></i>

Modül Bilgisi

</h3>

<div class="info-box">

<div class="info-icon">

<i class="fa-solid fa-triangle-exclamation"></i>

</div>

<div>

<h4>

TCP/IP Cihaz Modülü

</h4>

<p>

Bu modül ilerleyen sürümlerde ZKTeco, turnike, kart okuyucu ve diğer TCP/IP cihazlarını destekleyecektir.

</p>

</div>

</div>

</div>



<div class="card">

<h3>

Tanımlı Cihazlar

</h3>

<div class="table-container">

<table>

<thead>

<tr>

<th>Cihaz Adı</th>

<th>ID</th>

<th>IP Adresi</th>

<th>Port</th>

<th>Bağlantı</th>

<th>Durum</th>

<th>İşlem</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="7" style="text-align:center;padding:60px;">

Henüz cihaz tanımlanmamıştır.

</td>

</tr>

</tbody>

</table>

</div>

</div>

`;

}