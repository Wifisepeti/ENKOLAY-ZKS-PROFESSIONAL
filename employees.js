//==================================================
// ENKOLAY ZKS PROFESSIONAL
// EMPLOYEES.JS
// VERSION 1.0
//==================================================

"use strict";

function loadEmployees(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="page-header">

    <div>

        <h2>

            <i class="fa-solid fa-users"></i>

            Çalışan Tanımlama

        </h2>

        <span>

            Personel bilgilerini yönetin

        </span>

    </div>

    <div class="page-status">

        <i class="fa-solid fa-user-plus"></i>

        Yeni Çalışan

    </div>

</div>


<div class="card visitor-card">

<div class="form-grid-2">


<div class="form-group">

<label>

Ad Soyad

</label>

<input
type="text"
placeholder="Ad Soyad">

</div>


<div class="form-group">

<label>

Birimi

</label>

<input
type="text"
placeholder="Bilgi İşlem">

</div>


<div class="form-group">

<label>

Daire / Oda No

</label>

<input
type="text"
placeholder="101">

</div>


<div class="form-group">

<label>

Dahili Telefon

</label>

<input
type="text"
placeholder="101">

</div>


<div class="form-group full">

<label>

Cep Telefonu

</label>

<input
type="text"
placeholder="05xx xxx xx xx">

</div>

</div>


<div class="button-bar">

<button class="btn btn-primary">

<i class="fa-solid fa-floppy-disk"></i>

Kaydet

</button>


<button class="btn btn-success">

<i class="fa-solid fa-file-export"></i>

Export

</button>


<button class="btn btn-warning">

<i class="fa-solid fa-file-import"></i>

Import

</button>


<button class="btn btn-danger">

<i class="fa-solid fa-trash"></i>

Temizle

</button>

</div>

</div>


<div class="card">

<div
style="
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
">

<h3>

Çalışan Listesi

</h3>

<input
type="text"
placeholder="🔍 Çalışan Ara..."
style="
width:280px;
">

</div>


<table>

<thead>

<tr>

<th>

Ad Soyad

</th>

<th>

Birim

</th>

<th>

Oda

</th>

<th>

Dahili

</th>

<th>

Cep

</th>

<th>

İşlem

</th>

</tr>

</thead>

<tbody>

<tr>

<td
colspan="6"
style="
text-align:center;
padding:50px;
">

Henüz çalışan kaydı bulunmuyor.

</td>

</tr>

</tbody>

</table>

</div>

`;

}