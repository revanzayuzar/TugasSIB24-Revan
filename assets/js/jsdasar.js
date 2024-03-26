// Alert
alert("JavaScript Dasar");

// Judul Konten
document.writeln("<h1>JavaScript Dasar</h1>");
document.writeln("<hr>");

// JavaScript Variabel
document.writeln("<h2>JavaScript Variabel</h2>");

var namaLengkap = "M. Revanza Yuzar";
var jurusan = "Teknik Informatika";
var universitas = "Universitas Jabal Ghafur";
var program = "Full Stack Web Developer";
var mitraProgram = "PT Arkatama Multi Solusindo";

document.writeln("Nama : " + namaLengkap);
document.writeln("<br>");
document.writeln("Jurusan : " + jurusan);
document.writeln("<br>");
document.writeln("Universitas : " + universitas);
document.writeln("<br>");
document.writeln("Program : " + program);
document.writeln("<br>");
document.writeln("Mitra Program : " + mitraProgram);
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Hai, perkenalkan nama saya " + namaLengkap + " dari jurusan " + jurusan + " di " + universitas + ". Saat ini saya sedang mengikuti kegiatan MSIB Kampus Merdeka dalam program " + program + " di " + mitraProgram + ".");

// Tipe Data Number
document.writeln("<h2>Tipe Data Number</h2>");

let bilanganBulat = 30;
let bilanganDesimal = 25.5;
let hasilPenjumlahan = bilanganBulat + bilanganDesimal;

document.writeln("Bilangan Bulat = " + bilanganBulat);
document.writeln("<br>");
document.writeln("Bilangan Desimal = " + bilanganDesimal);
document.writeln("<br>");
document.writeln("<br>");
document.writeln("Bilangan Bulat + Bilangan Desimal = " + hasilPenjumlahan);

// Tipe Data String
document.writeln("<h2>Tipe Data String</h2>");

let teks = "ingin menjadi seorang Full Stack Web Developer.";

document.writeln("Saya " + teks);

// Tipe Data Boolean
document.writeln("<h2>Tipe Data Boolean</h2>");

let perbandingan1 = 25 < 50;
let perbandingan2 = 25 > 50;

document.writeln("25 < 50 adalah " + perbandingan1);
document.writeln("<br>");
document.writeln("25 > 50 adalah " + perbandingan2);