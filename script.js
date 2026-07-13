function login() {
    console.log(String("usuario logado com o email ") + String(document.getElementById("email").value))
}

function register() {
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("pass", document.getElementById("pass").value)
    alert(String("Ola, ") + String(localStorage.getItem("name"))+ String(" seja bem vindo"))
}