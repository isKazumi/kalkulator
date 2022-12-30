// Variabel untuk menyimpan nilai yang ditampilkan di layar
var layar = '';

// Fungsi untuk menambahkan angka atau simbol ke layar
function masukkan(input) {
    layar += input;
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk menghitung hasil dari operasi matematika
function hitung() {
    layar = eval(layar);
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk membersihkan layar
function bersihkan() {
    layar = '';
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk menghitung sinus sudut (dalam radian)
function sinus() {
    var sudut = parseFloat(layar);
    var hasil = Math.sin(sudut);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung cosinus
function cosinus() {
    var sudut = parseFloat(layar);
    var hasil = Math.cos(sudut);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung tangen
function tangen() {
    var sudut = parseFloat(layar);
    var hasil = Math.tan(sudut);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung logaritma
function logaritma() {
    var angka = parseFloat(layar);
    var hasil = Math.log10(angka);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung akar kuadrat dari angka
function akar() {
    var angka = parseFloat(layar);
    var hasil = Math.sqrt(angka);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung persentase dari angka
function persen() {
    var angka = parseFloat(layar);
    var hasil = angka / 100;
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung pemangkatan (xy)
function pangkat() {
    // Cari indeks simbol pangkat (^)
    var indeks = layar.indexOf('^');

    // Hitung pemangkatan
    var hasil = Math.pow(parseFloat(layar.substring(0, indeks)), parseFloat(layar.substring(indeks + 1)));
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung logaritma basis e dari angka
function basise() {
    var angka = parseFloat(layar);
    var hasil = Math.log(angka);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menambahkan nilai pi ke layar
function pi() {
    layar += Math.PI;
    document.getElementById('layar').innerHTML = layar;
}

// Fungsi untuk menghitung invers tangen dari angka
function invTangen() {
    var angka = parseFloat(layar);
    var hasil = Math.atan(angka);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung invers cosinus dari angka
function invCosinus() {
    var angka = parseFloat(layar);
    var hasil = Math.acos(angka);
    document.getElementById('layar').innerHTML = hasil;
}

// Fungsi untuk menghitung invers sinus dari angka
function invSinus() {
    var angka = parseFloat(layar);
    var hasil = Math.asin(angka);
    document.getElementById('layar').innerHTML = hasil;
}
