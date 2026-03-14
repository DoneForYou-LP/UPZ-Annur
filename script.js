// ------------------ LIGHTBOX ------------------
const images=[
"kegiatan1.jpg",
"kegiatan2.jpg",
"kegiatan3.jpg",
"kegiatan4.jpg",
"kegiatan5.jpg",
"kegiatan6.jpg"
];

let currentIndex=0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Variabel untuk swipe
let startX = 0;
let endX = 0;

function openLightbox(index){
    currentIndex=index;
    lightbox.style.display="flex";
    fadeImage(images[currentIndex]);
}

function closeLightbox(){
    lightbox.style.display="none";
}

function fadeImage(src){
    lightboxImg.style.opacity=0;
    setTimeout(()=>{
        lightboxImg.src=src;
        lightboxImg.style.opacity=1;
    }, 200);
}

function changeSlide(step){
    currentIndex += step;
    if(currentIndex < 0) currentIndex = images.length-1;
    if(currentIndex >= images.length) currentIndex = 0;
    fadeImage(images[currentIndex]);
}

// ------------------ SWIPE MOBILE ------------------
lightboxImg.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

lightboxImg.addEventListener("touchmove", function(e){
    endX = e.touches[0].clientX;
});

lightboxImg.addEventListener("touchend", function(e){
    let diff = startX - endX;
    if(diff > 50){
        changeSlide(1);
    } else if(diff < -50){
        changeSlide(-1);
    }
});

// ------------------ FORM DONASI ------------------
const amountInput = document.getElementById("amount");

amountInput.addEventListener("input", function(e){
    let value = this.value.replace(/\D/g,'');
    if(value === ''){ this.value = ''; return;}
    this.value = parseInt(value).toLocaleString('id-ID');
});

document.getElementById("donation-form").addEventListener("submit", function(e){
    e.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const amount=document.getElementById("amount").value.replace(/\./g,'');
    const type=document.getElementById("type").value;
    const message=document.getElementById("message").value;

    const waMessage=`Nama: ${name}\nEmail/WA: ${email}\nNominal: Rp${amount}\nJenis: ${type}\nPesan: ${message}`;
    const waLink=`https://wa.me/6281390392349?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink,"_blank");

    document.getElementById("form-response").innerText="Form berhasil dikirim! Anda akan diarahkan ke WhatsApp.";

    this.reset();
});
