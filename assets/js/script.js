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