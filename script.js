function login() {
    if (document.getElementById("email").value == localStorage.getItem("email") && document.getElementById("pass").value == localStorage.getItem("pass")) {
        window.location.href = "start.html"
    }
}
function register() {
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("pass", document.getElementById("pass").value)
    alert(String("Ola, ") + String(localStorage.getItem("name"))+ String(" seja bem vindo"))
}
function atualizartexto() {
    document.getElementById("boasvindas").innerText = String("seja bem vindo: " + localStorage.getItem("name"))
}