function Login_session() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (email === "sahilmulla199@gmail.com" && password === "sahil1234") {
        sessionStorage.setItem("username", "Sahil Mulla");
        alert("Login Successful...");
        check_session();
        window.location.replace("../index.html");
    } else {
        document.getElementById("blankMsg").innerHTML = "*Incorrect Email or Password";
    }

}

function addDatabase() {



    class User {


        constructor(username, email, password, address, role) {
            this.username = username;
            this.email = email;
            this.password = password;
            this.address = address;
            this.role = role;
        }
    }

    let user_1 = new User('Sahil', 'sahilmulla199@gmail.com', 'sahil1234', 'wai,satara', 'role_admin');
    let user_2 = new User('sujit', 'sujit@gmail.com', 'sujit1234', 'nagar', 'role_user');
    let user_3 = new User('akash', 'akash@gmail.com', 'akash1234', 'pune', 'role_admin');
    let database = new Array();
    database.push(user_1);
    database.push(user_2);
    database.push(user_3);

    console.log(database);

    localStorage.setItem("database", database);

    check_session('false');
}

function check_session(args) {




    if (sessionStorage.getItem("username") === null) {
        document.getElementById("nav_logout").style.display = "none";
        document.getElementById("nav_show_all_room").style.display = "none";
        document.getElementById("nav_add_room").style.display = "none";
        document.getElementById("nav_book_room").style.display = "none";
        document.getElementById("nav_login").style.display = 'inline';
        document.getElementById("nav_registration").style.display = 'inline';
        if (args == 'true') {
            window.location.replace("../user/login.html");
        }


    } else {
        document.getElementById("nav_logout").style.display = 'inline';
        document.getElementById("nav_show_all_room").style.display = 'inline';
        document.getElementById("nav_add_room").style.display = 'inline';
        document.getElementById("nav_book_room").style.display = 'inline';
        document.getElementById("nav_login").style.display = "none";
        document.getElementById("nav_registration").style.display = "none";


        document.getElementById("id_user_name").innerHTML = "Welcome " + sessionStorage.getItem("username");

    }


}

function clearSession() {
    sessionStorage.removeItem("username");
    check_session();
}