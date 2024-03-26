// Script untuk menampilkan konten (.content)
let content = document.querySelector(".content");

setTimeout(function() {
    content.classList.add("content-active");
}, 1000);

// Open Menu / Menampilkan Menu
let openMenu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
let bgDark = document.querySelector(".bg-dark");

openMenu.addEventListener("click", function() {
    navbar.classList.add("navbar-active");
    bgDark.classList.add("bg-dark-active");
});

// Close Menu / Menyembunyikan Menu
let closeMenu = document.getElementById("close");

closeMenu.addEventListener("click", function() {
    navbar.classList.remove("navbar-active");
    bgDark.classList.remove("bg-dark-active");
});

document.addEventListener("click", function(event) {
    if (!navbar.contains(event.target) && !closeMenu.contains(event.target) && !openMenu.contains(event.target)) {
        navbar.classList.remove("navbar-active");
        bgDark.classList.remove("bg-dark-active");
    }
});

// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function goToSlide(index) {
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    goToSlide(currentIndex);
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    goToSlide(currentIndex);
}

// Slider Otomatis
setInterval(() => {
    nextSlide();
}, 5000); // Mengganti slide setiap 5 detik