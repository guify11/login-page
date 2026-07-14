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
    if (localStorage.getItem("lang") == null){
        localStorage.setItem("lang", "en")
    }
    if (localStorage.getItem("lang") == "en"){
        if (window.name == "start"){
           document.getElementById("WelcomeMessage").innerText = String("welcome: " + localStorage.getItem("name")) 
        }
        else if (window.name == "index") {
            document.getElementById("greatings").innerText = "welcome"
            document.getElementById("log-in").innerText = "log-in"
            document.getElementById("log-inText").innerText = "log-in"
            document.getElementById("register").innerText = "register"
            document.getElementById("languages").innerText = "Languages"
        }
        else if (window.name == "register") {
            document.getElementById("greatings").innerText = "welcome"
            document.getElementById("register").innerText = "register: "
            document.getElementById("registerButt").innerText = "register"
        }
        else if (window.name == "languague"){
            document.getElementById("home").innerText = "Back to the home page"
        }
    }
    if (localStorage.getItem("lang") == "pt"){
        if (window.name == "start"){
           document.getElementById("WelcomeMessage").innerText = String("seja Bem-vindo: " + localStorage.getItem("name")) 
        }
        else if (window.name == "index") {
            document.getElementById("languages").innerText = "Outras linguas"
            document.getElementById("log-inText").innerText = "entar"
            document.getElementById("greatings").innerText = "Bem-vindo"
            document.getElementById("log-in").innerText = "entar"
            document.getElementById("register").innerText = "registrar"
        }
        else if (window.name == "register") {
            document.getElementById("greatings").innerText = "bem-vindo"
            document.getElementById("register").innerText = "registrar a sua conta: "
            document.getElementById("registerButt").innerText = "registrar"
        }
        else if (window.name == "languague"){
            document.getElementById("home").innerText = "voltar para a pagina inicial"
        }
    }
    
}

function chancheLang(Lang) {
    localStorage.setItem("lang", Lang)
    console.log(String("language change to ") + String(Lang))
    atualizartexto()
}