function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    var navIcon = document.getElementById("iconOpen");
    navIcon.style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var navIcon = document.getElementById("iconOpen");
    navIcon.style.display = "block";
}

window.onscroll = function() {stickyNav()};
var navbar = document.getElementById("navBarSticky");
var imageGallery = document.getElementById("imageGallery");
var sticky = navbar.offsetTop;
       
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        imageGallery.classList.add("overlapping")
        var navIcon = document.getElementById("iconOpen");
        navIcon.style.display = "block";
    } 
    else {   
        navbar.classList.remove("sticky");
        imageGallery.classList.remove("overlapping")
        var navIcon = document.getElementById("iconOpen");
        navIcon.style.display = "none";
    }
}

function Add() {
    var text = document.getElementById("mrelease").value;
    if (text == ''){
        alert('The line is empty!');
    }
    var node = document.createElement("li");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

}


function Remove() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[1]);
}


function empty(){
    var textFirstName = document.getElementById("fieldFirstName").value;
    var textEmail = document.getElementById("fieldEmail").value;
    var textPhoneNumber = document.getElementById("fieldPhoneNumber").value;
    var textSecondName = document.getElementById("fieldSecondName").value;
    if (textFirstName == "" && textSecondName == "" && textPhoneNumber == "" && textEmail == "") {
        alert("Enter text in all the fields!");
        return false;
    };
    if (textFirstName == "") {
        alert("Enter text in field 'First Name'");
        return false;
    }; 
    if (textSecondName == "") {
        alert("Enter text in field 'Second Name'");
        return false;
    }; 
    if (textPhoneNumber == "") {
        alert("Enter text in field 'Phone Number'");
        return false;
    };
    if (textEmail == "") {
        alert("Enter text in field 'E-mail'");
        return false;
    };
}

/*
var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.style.backgroundColor = "white";
    }
}
else {
    if (document.body) {
        document.body.style.backgroundColor = "black";
    }
}
*/



