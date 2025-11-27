function dropbtn() {
    var menu = document.getElementById("navLinks");
    var icon = document.getElementById("menu-btn");

    menu.style.display = (menu.style.display === "block") ? "none" : "block";

    if (menu.style.display === "block") {
        icon.src = "/Boracay-SAND/resources/icons/close.png";  
    } else {
        icon.src = "/Boracay-SAND/resources/icons/person.png"; 
    }
}


