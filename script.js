function kirimWA(){

var nama = document.getElementById("nama").value;
var jenis = document.getElementById("jenis").value;
var jumlah = document.getElementById("jumlah").value;

var pesan = "Assalamu'alaikum, saya ingin berdonasi.%0A%0A"+
"Nama : "+nama+"%0A"+
"Jenis Donasi : "+jenis+"%0A"+
"Jumlah : Rp"+jumlah;

window.open("https://wa.me/6281234567890?text="+pesan);

}