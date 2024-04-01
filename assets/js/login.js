// Login
let login = document.getElementById("login");

login.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let username = "revanzayuzar";
    let password = "revan123aja";
    let passwordSalah = document.querySelector(".password-salah");
    let closePasswordSalah = document.getElementById("close-password-salah");

    if (inputUsername === username && inputPassword === password) {
        window.location.href = "assets/html/home.html";
    }

    else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        passwordSalah.classList.add("password-salah-active");

        closePasswordSalah.addEventListener("click", function() {
            passwordSalah.classList.remove("password-salah-active");
        });
    }
});