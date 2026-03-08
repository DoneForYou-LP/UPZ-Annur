function formatRupiah(input){

let angka = input.value.replace(/[^,\d]/g, "").toString();
let split = angka.split(",");
let sisa = split[0].length % 3;
let rupiah = split[0].substr(0, sisa);
let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

if(ribuan){
let separator = sisa ? "." : "";
rupiah += separator + ribuan.join(".");
}

input.value = rupiah;

}
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
