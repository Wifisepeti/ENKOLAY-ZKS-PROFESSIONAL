//==================================================
// ENKOLAY ZKS PROFESSIONAL
// SETTINGS.JS
//==================================================

"use strict";

function loadSettings(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="page-header">

<div>

<h2>

<i class="fa-solid fa-gear"></i>

Ayarlar

</h2>

<span>

Program ayarlarını yönetin

</span>

</div>

<div class="page-status">

<i class="fa-solid fa-shield-halved"></i>

Sistem Hazır

</div>

</div>


<div class="dashboard-cards">

<div class="stat-card">

<i class="fa-solid fa-key"></i>

<h3>Lisans</h3>

<h1>Aktif</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-database"></i>

<h3>SQLite</h3>

<h1>Hazır</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-floppy-disk"></i>

<h3>Yedek</h3>

<h1>Aktif</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-user-shield"></i>

<h3>Kullanıcı</h3>

<h1>1</h1>

</div>

</div>


<div class="form-grid-2">

<div class="card">

<h3>

<i class="fa-solid fa-key"></i>

Lisans

</h3>

<div class="form-group">

<label>Lisans Dosyası</label>

<input type="file">

</div>

<div class="button-bar">

<button class="btn btn-primary">

<i class="fa-solid fa-upload"></i>

Lisans Yükle

</button>

</div>

</div>


<div class="card">

<h3>

<i class="fa-solid fa-user"></i>

Kullanıcı

</h3>

<div class="form-group">

<label>Kullanıcı Adı</label>

<input type="text">

</div>

<div class="form-group">

<label>Şifre</label>

<input type="password">

</div>

<div class="button-bar">

<button class="btn btn-success">

<i class="fa-solid fa-user-plus"></i>

Ekle

</button>

<button class="btn btn-danger">

<i class="fa-solid fa-user-minus"></i>

Sil

</button>

</div>

</div>


<div class="card">

<h3>

<i class="fa-solid fa-clock"></i>

Tarih / Saat

</h3>

<div class="form-group">

<label>Sistem Tarihi</label>

<input type="date">

</div>

<div class="form-group">

<label>Sistem Saati</label>

<input type="time">

</div>

<div class="button-bar">

<button class="btn btn-primary">

<i class="fa-solid fa-rotate"></i>

Güncelle

</button>

</div>

</div>


<div class="card">

<h3>

<i class="fa-solid fa-database"></i>

Veritabanı

</h3>

<div class="button-bar">

<button class="btn btn-success">

<i class="fa-solid fa-download"></i>

Yedek Al

</button>

<button class="btn btn-warning">

<i class="fa-solid fa-upload"></i>

Geri Yükle

</button>

</div>

</div>

</div>


<div class="card">

<h3>

<i class="fa-solid fa-circle-info"></i>

Program Bilgisi

</h3>

<table>

<tr>

<td>Program</td>

<td>ENKOLAY ZKS Professional</td>

</tr>

<tr>

<td>Versiyon</td>

<td>1.0.0</td>

</tr>

<tr>

<td>Veritabanı</td>

<td>SQLite</td>

</tr>

<tr>

<td>Otomatik Yedekleme</td>

<td>Aktif</td>

</tr>

<tr>

<td>Geliştirici</td>

<td>ENKOLAY Bilişim</td>

</tr>

</table>

</div>

`;

}