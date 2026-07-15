//==================================================
// ENKOLAY ZKS PROFESSIONAL
// REPORTS.JS
//==================================================

"use strict";

function loadReports(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="page-header">

<div>

<h2>

<i class="fa-solid fa-chart-column"></i>

Raporlar

</h2>

<span>

Ziyaretçi raporlarını filtreleyin ve dışa aktarın.

</span>

</div>

<div class="page-status">

<i class="fa-solid fa-file-lines"></i>

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

<i class="fa-solid fa-right-from-bracket"></i>

<h3>Bugünkü Çıkış</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-users"></i>

<h3>Toplam Ziyaret</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<i class="fa-solid fa-file-pdf"></i>

<h3>Hazır Rapor</h3>

<h1>0</h1>

</div>

</div>


<div class="card">

<h3>

<i class="fa-solid fa-filter"></i>

Rapor Filtresi

</h3>

<div class="form-grid-4">

<div class="form-group">

<label>Ad Soyad</label>

<input type="text" placeholder="Ad Soyad">

</div>

<div class="form-group">

<label>Plaka</label>

<input type="text" placeholder="06 ABC 123">

</div>

<div class="form-group">

<label>Başlangıç Tarihi</label>

<input type="date">

</div>

<div class="form-group">

<label>Bitiş Tarihi</label>

<input type="date">

</div>

</div>


<div class="button-bar">

<button class="btn btn-primary">

<i class="fa-solid fa-magnifying-glass"></i>

Raporla

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

Rapor Sonuçları

</h3>

<input
type="text"
placeholder="🔍 Rapor Ara..."
style="width:280px;">

</div>


<div class="table-container">

<table>

<thead>

<tr>

<th>Ad Soyad</th>

<th>Firma</th>

<th>Plaka</th>

<th>Giriş</th>

<th>Çıkış</th>

<th>Kart</th>

<th>Durum</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="7" style="text-align:center;padding:60px;">

Henüz rapor bulunmuyor.

</td>

</tr>

</tbody>

</table>

</div>

</div>

`;

}