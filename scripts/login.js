const username = "UwU";
const password = "123456789";
const REDIRECT_URL = "homepage.html";

    function login() {
        event.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === username && pass === password) {
            alert("Login successful! Redirecting...");
            window.location.href = REDIRECT_URL;
        } else {
            alert("Invalid username or password.");
        }
    }