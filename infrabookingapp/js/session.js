function Login_session() {


    sessionStorage.setItem("username", "sahil");
    alert("Login Successful...");

    check_session();
    window.location.replace("../index.html");
}

function check_session() {

    if (sessionStorage.getItem("username") === null) {
        document.getElementById("nav_logout").style.display = "none";
        document.getElementById("nav_show_all_room").style.display = "none";
        document.getElementById("nav_add_room").style.display = "none";
        document.getElementById("nav_book_room").style.display = "none";
        document.getElementById("nav_login").style.display = 'inline';
        document.getElementById("nav_registration").style.display = 'inline';

    } else {
        document.getElementById("nav_logout").style.display = 'inline';
        document.getElementById("nav_show_all_room").style.display = 'inline';
        document.getElementById("nav_add_room").style.display = 'inline';
        document.getElementById("nav_book_room").style.display = 'inline';
        document.getElementById("nav_login").style.display = "none";
        document.getElementById("nav_registration").style.display = "none";
    }
}

function clearSession() {
    sessionStorage.removeItem("username");
    check_session();
}