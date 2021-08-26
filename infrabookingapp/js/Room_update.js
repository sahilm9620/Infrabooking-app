function confirm_deleteRoom() {
    var result = confirm('you want to delete?');
    // document.write(result);
    if (result) {
        // document.write("room deleted <br>");
    } else {
        // document.write("room not deleted <br>");
    }
}

function confirm_updateRoom() {
    var result = confirm('you want to update?');
    // document.write(result);
    if (result) {
        // document.write("room deleted <br>");
    } else {
        // document.write("room not deleted <br>");
    }
}


function show_room(args) {


    if (args === 1) {
        document.getElementById("room_img").src = "../images/slide2.jpg"
        document.getElementById("room_title").innerHTML = "Meeting Room";
        document.getElementById("room_description").innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content. ";
        document.getElementById("room_capacity").innerHTML = "Capacity : 70 ";
        document.getElementById("room_details").style.display = "inline";
    } else if (args === 2) {
        document.getElementById("room_img").src = "../images/slide3.png"
        document.getElementById("room_title").innerHTML = "Board Room ";
        document.getElementById("room_description").innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content. ";
        document.getElementById("room_capacity").innerHTML = "Capacity : 100 ";
        document.getElementById("room_details").style.display = "inline";
    } else if (args === 3) {
        document.getElementById("room_img").src = "../images/slide_1.jpg"
        document.getElementById("room_title").innerHTML = "Conference Room";
        document.getElementById("room_description").innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content. ";
        document.getElementById("room_capacity").innerHTML = "Capacity : 80 ";
        document.getElementById("room_details").style.display = "inline";
    } else if (args === 4) {
        document.getElementById("room_img").src = "../images/slide2.jpg"
        document.getElementById("room_title").innerHTML = "Celebration Room";
        document.getElementById("room_description").innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content. ";
        document.getElementById("room_capacity").innerHTML = "Capacity : 160 ";
        document.getElementById("room_details").style.display = "inline";
    }

}