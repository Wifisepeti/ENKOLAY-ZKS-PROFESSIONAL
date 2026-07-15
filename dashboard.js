//==================================================
// ENKOLAY ZKS PROFESSIONAL
// MOVEMENTS.JS
// VERSION 1.0
//==================================================

"use strict";

function loadMovements(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="page-header">

<div>

<h2>

<i class="fa-solid fa-right-left"></i>

Ziyaretçi Hareketleri

</h2>

<span>

Giriş / Çıkış hareketlerini görüntüleyin

</span>

</div>

<div class="page-status">

<i class="fa-solid fa-chart-line"></i>

Toplam 0 Kayıt

</div>

</div>


<div class="dashboard-cards">

<div class="stat-card">

<i class="fa-solid fa-right-to-bracket"></i>

<h3>Bugünkü Giriş</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-door-open"></i>

<h3>İçeride</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-right-from-bracket"></i>

<h3>Bugünkü Çıkış</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-ban"></i>

<h3>Yasaklı</h3>

<h1>0</h1>

</div>

</div>


<div class="card">

<h3>

<i class="fa-solid fa-filter"></i>

Filtrele

</h3>

<div class="form-grid-4">

<div class="form-group">

<label>Ad Soyad</label>

<input
type="text"
placeholder="Ad Soyad">

</div>

<div class="form-group">

<label>Plaka</label>

<input
type="text"
placeholder="06 ABC 123">

</div>

<div class="form-group">

<label>Başlangıç</label>

<input type="date">

</div>

<div class="form-group">

<label>Bitiş</label>

<input type="date">

</div>

<div class="form-group full">

<label>Durum</label>

<select>

<option>Tüm Hareketler</option>

<option>İçeride</option>

<option>Çıkış Yaptı</option>

</select>

</div>

</div>

<div class="button-bar">

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


<div class="card">

<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">

<h3>

Son Hareketler

</h3>

<input
type="text"
placeholder="🔍 Hareket Ara..."
style="width:280px;">

</div>

<div class="table-container">

<table>

<thead>

<tr>

<th>Saat</th>

<th>Ad Soyad</th>

<th>Firma</th>

<th>Plaka</th>

<th>Kart</th>

<th>Durum</th>

<th>İşlem</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="7" style="text-align:center;padding:60px;">

Henüz ziyaretçi hareketi bulunmuyor.

</td>

</tr>

</tbody>

</table>

</div>

</div>

`;

}