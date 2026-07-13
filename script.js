function login() {
    if (document.getElementById("email").value == localStorage.getItem("email") && document.getElementById("pass").value == localStorage.getItem("pass")) {
        
    }
}
function register() {
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("pass", document.getElementById("pass").value)
    alert(String("Ola, ") + String(localStorage.getItem("name"))+ String(" seja bem vindo"))
}