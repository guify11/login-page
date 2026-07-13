function login() {
    if (document.getElementById("email").value == localStorage.getItem("email") && document.getElementById("pass").value == localStorage.getItem("pass")) {
        window.location.href = "start.html"
    }
}
function register() {
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("pass", document.getElementById("pass").value)
    alert(String("welcome, ") + String(localStorage.getItem("name")))
}
function atualizartexto() {
    document.getElementById("WelcomeMessage").innerText = String("welcome: " + localStorage.getItem("name"))
}