// Login Form Validation
function validateLoginForm() {
    //collect form data in JavaScript variables  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var id_email = document.getElementById("email");
    var id_error_msg = document.getElementById("blankMsg");
    var id_btn_login = document.getElementById("btn_login");
    var id_password = document.getElementById('password');


    // email validation
    if (email == "" || email === null) {
        id_error_msg.innerHTML = "*Email Required";
        id_email.style.borderColor = "red";
        id_btn_login.setAttribute("disabled", "disabled");
        return false;
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        id_error_msg.innerHTML = "*Invalid Email ID ";
        id_email.style.borderColor = "red";
        id_btn_login.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_msg.innerHTML = "";
        id_email.style.borderColor = "";
        id_btn_login.removeAttribute("disabled");

    }


    //check empty password field  
    if (password == "" || password === null) {
        id_error_msg.innerHTML = "*Password Required";
        id_password.style.borderColor = "red";
        id_btn_login.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_msg.innerHTML = "";
        id_password.style.borderColor = "";
        id_btn_login.removeAttribute("disabled");
    }




    //minimum password length validation  
    if (password.length < 8) {
        id_error_msg.innerHTML = "*Password must contain atleast 8 characters";
        id_password.style.borderColor = "red";
        id_btn_login.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_msg.innerHTML = "";
        id_password.style.borderColor = "";
        id_btn_login.removeAttribute("disabled", "disabled");
    }


    //maximum length of password validation  
    if (password.length > 15) {
        id_error_msg.innerHTML = "*Password length must not exceed 15 characters";
        id_password.style.borderColor = "red";
        id_btn_login.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_msg.innerHTML = "";
        id_password.style.borderColor = "";
        id_btn_login.removeAttribute("disabled", "disabled")
    }


}

// Registartion Form Validation
function validateRegisterForm() {
    //collect form data in JavaScript variables 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("cpassword").value;

    var id_error = document.getElementById("blankMsg");
    var id_name = document.getElementById('name');
    var id_btn_register = document.getElementById("btn_register");
    var id_email_reg = document.getElementById('email');
    var id_password_reg = document.getElementById('password');
    var id_cpassword_reg = document.getElementById('cpassword');

    //check empty first name field  
    if (name == "" || name === null) {
        id_error.innerHTML = "*Name Required";
        id_name.style.borderColor = "red";
        document.getElementById("btn_register").setAttribute("disabled", "disabled");
        return false;
    }

    //character data validation  
    else if (!isNaN(name)) {
        id_error.innerHTML = "*Only characters are allowed";
        id_name.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else if (name.length <= 3) {
        id_error.innerHTML = "*Name must contain atleast 4 characters";
        id_name.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_name.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")
    }



    if (email == "" || email === null) {
        id_error.innerHTML = "*Email Required";
        id_email_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        id_error.innerHTML = "*Invalid Email ID ";
        id_email_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_email_reg.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")

    }

    //check empty password field  
    if (pw1 == "" || pw1 === null) {
        id_error.innerHTML = "*Password Required";
        id_password_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_password_reg.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")
    }

    //minimum password length validation  
    if (pw1.length < 8) {
        id_error.innerHTML = "*Password must contain atleast 8 characters";
        id_password_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_password_reg.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")
    }



    //check empty confirm password field  
    if (pw2 == "" || pw2 === null) {
        id_error.innerHTML = "*Confirm Password Required";
        id_cpassword_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_cpassword_reg.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")
    }



    //maximum length of password validation  
    if (pw1.length > 15) {
        id_error.innerHTML = "*Password length must not exceed 15 characters";
        id_password_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_password_reg.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")

    }


    if (pw1 != pw2) {
        id_error.innerHTML = "*Password and Confirm Password Did Not Match";
        id_password_reg.style.borderColor = "red";
        id_cpassword_reg.style.borderColor = "red";
        id_btn_register.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error.innerHTML = "";
        id_password_reg.style.borderColor = "";
        id_cpassword_reg.style.borderColor = "";
        id_btn_register.removeAttribute("disabled")
    }

}


// Validate Add room Form
function validateAddRoomForm() {
    //collect form data in JavaScript variables  


    var room_name = document.getElementById("room_name").value;
    var capacity = document.getElementById("capacity").value;

    var id_error_room = document.getElementById("blankMsg");
    var id_room_name = document.getElementById('room_name');
    var id_btn_add_room = document.getElementById("btn_add_room");
    var id_capacity = document.getElementById('capacity');


    if (room_name == "" || room_name === null) {
        id_error_room.innerHTML = "*Room Name Required";
        id_room_name.style.borderColor = "red";
        id_btn_add_room.setAttribute("disabled", "disabled");
        return false;
    } else if (room_name.length <= 3) {
        id_error_room.innerHTML = "*Room Name must contain atleast 4 characters";
        id_room_name.style.borderColor = "red";
        id_btn_add_room.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_room.innerHTML = "";
        id_room_name.style.borderColor = "";
        id_btn_add_room.removeAttribute("disabled")

    }


    //check capacity password field  
    if (capacity == "" || capacity == null) {
        id_error_room.innerHTML = "*Capacity Required";
        id_capacity.style.borderColor = "red";
        id_btn_add_room.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_room.innerHTML = "";
        id_capacity.style.borderColor = "";
        id_btn_add_room.removeAttribute("disabled")
    }




    //minimum capacity length validation  
    if (capacity.length == 0) {
        id_error_room.innerHTML = "*Capacity must be greater than 0";
        id_capacity.style.borderColor = "red";
        id_btn_add_room.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_room.innerHTML = "";
        id_capacity.style.borderColor = "";
        id_btn_add_room.removeAttribute("disabled")
    }


    //maximum length of capacity validation  
    if (capacity > 150) {
        id_error_room.innerHTML = "*Capacity must be less than 150";
        id_capacity.style.borderColor = "red";
        id_btn_add_room.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_room.innerHTML = "";
        id_capacity.style.borderColor = "";
        id_btn_add_room.removeAttribute("disabled");
    }


}




// Book Room Validation

function validateBookRoomForm() {
    //collect form data in JavaScript variables  
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;


    var id_error_bookRoom = document.getElementById("blankMsg");
    var id_date = document.getElementById('date');
    var id_btn_check_available = document.getElementById("btn_check_available");
    var id_description = document.getElementById('description');
    // date validation
    if (date == "" || date === null) {
        id_error_bookRoom.innerHTML = "*Date Required";
        id_date.style.borderColor = "red";
        id_btn_check_available.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_bookRoom.innerHTML = "";
        id_date.style.borderColor = "";
        id_btn_check_available.removeAttribute("disabled");

    }


    //check empty description field  
    if (description == "" || description === null) {
        id_error_bookRoom.innerHTML = "*description Required";
        id_description.style.borderColor = "red";
        id_btn_check_available.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_bookRoom.innerHTML = "";
        id_description.style.borderColor = "";
        id_btn_check_available.removeAttribute("disabled");
    }




    //minimum description length validation  
    if (description.length < 8) {
        id_error_bookRoom.innerHTML = "*description must contain atleast 8 characters";
        id_description.style.borderColor = "red";
        id_btn_check_available.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_bookRoom.innerHTML = "";
        id_description.style.borderColor = "";
        id_btn_check_available.removeAttribute("disabled");
    }


    //maximum length of description validation  
    if (description.length > 30) {
        id_error_bookRoom.innerHTML = "*description length must not exceed 30 characters";
        id_description.style.borderColor = "red";
        id_btn_check_available.setAttribute("disabled", "disabled");
        return false;
    } else {
        id_error_bookRoom.innerHTML = "";
        id_description.style.borderColor = "";
        id_btn_check_available.removeAttribute("disabled");
    }


}