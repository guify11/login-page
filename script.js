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
        }
        else if (window.name == "register") {
            document.getElementById("greatings").innerText = "welcome"
            document.getElementById("register").innerText = "register: "
            document.getElementById("registerButt").innerText = "register"
        }
    }
    
}

function chancheLang(Lang) {
    localStorage.setItem("lang", Lang)
    console.log(String("language change to ") + String(Lang))
}