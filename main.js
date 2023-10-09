window.onload = pageLoad;

function pageLoad() {
    var instagram = document.getElementById("instagram");
    instagram.onclick = instagramlink;

    var facebook = document.getElementById("Facebook");
    facebook.onclick = facebooklink;

    var github = document.getElementById("Github");
    github.onclick = githublink;

    var project = document.getElementById("project");
    project.onclick = projectlink;

    var home = document.getElementById("home");
    home.onclick = homelink;

    var As4 = document.getElementById("as4");
    As4.onclick = as4link;

    var As5 = document.getElementById("as5");
    As5.onclick = as5link;

    var As6 = document.getElementById("as6");
    As6.onclick = as6link;

    var As7 = document.getElementById("as7");
    As7.onclick = as7link;

    var Ref = document.getElementById("referr");
    Ref.onclick = reflink;
    
}


function instagramlink() {
    location.href = "https://www.instagram.com/fk_tnpp/";
}

function facebooklink() {
    location.href = "https://www.facebook.com/profile.php?id=100008134233913";
}

function githublink() {
    location.href = "https://github.com/fktnp";
}

function projectlink() {
    location.href = "Project.html";
}

function homelink() {
    location.href = "index.html";
}

function as4link() {
    location.href = "https://fktnp.github.io/as4/recipe.html";
}

function as5link() {
    location.href = "https://fktnp.github.io/As5/index.html";
}

function as6link () {
    location.href = "https://fktnp.github.io/As6/register.html";
}

function as7link () {
    location.href = "https://fktnp.github.io/As7/index.html";
}

function reflink () {
    location.href = "https://www.flaticon.com/";
}


