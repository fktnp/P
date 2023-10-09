window.onload = pageLoad;

function pageLoad() {
    var home = document.getElementById("home");
    home.onclick = homelink;
}

function homelink(){
    location.href = "index.html";
}
