// --- 1. HAMBURGER MENÜ AÇMA/KAPAMA (EKSİK OLAN KISIM BUYDU) ---
const menuBtn = document.querySelector('.menu-btn'); // Hamburger ikonu
const linkler = document.querySelector('.linkler'); // Menü listesi

menuBtn.addEventListener('click', () => {
    // Tıklayınca 'acik' class'ını ekle veya çıkar
    linkler.classList.toggle('acik');
    
    // İkonu değiştirelim (İsteğe bağlı görsel şov: Çarpı olsun mu?)
    // Bunu istersen ekleriz, şimdilik menü açılsın yeter.
});

// --- 2. SCROLL EDİNCE NAVBAR RENGİ DEĞİŞSİN ---
const menu = document.querySelector('.ust-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.classList.add('aktif');
    } else {
        menu.classList.remove('aktif');
    }
});

// --- 3. SLIDER KODLARI (SENİN YAZDIKLARIN) ---
const hat = document.querySelector('.slayt-hatti');
const slaytlar = document.querySelectorAll('.slayt');
const solTus = document.querySelector('.ok.sol');
const sagTus = document.querySelector('.ok.sag');

let sira = 0;
const toplamSlayt = slaytlar.length;

sagTus.addEventListener('click', () => {
    sira++;
    if (sira >= toplamSlayt) {
        sira = 0; 
    }
    hareketEttir();
});

solTus.addEventListener('click', () => {
    sira--;
    if (sira < 0) {
        sira = toplamSlayt - 1; 
    }
    hareketEttir();
});

function hareketEttir() {
    hat.style.transform = `translateX(-${sira * 100}%)`;
}