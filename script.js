$(document).ready(function(){
    $("#iconOpen").click(function(){
        $("#mySidenav").width("100%");
        $("#iconOpen").hide();
    });
});

$(document).ready(function(){
    $("#iconClose").click(function(){
        $("#mySidenav").width(0);
        $("#iconOpen").show();
    });
});

var navbar = document.getElementById("navBarSticky");
var imageGallery = document.getElementById("imageGallery");
var $sticky = navbar.offsetTop;

$(window).scroll(function(){
    if (window.pageYOffset >= $sticky) {  
        $("#navBarSticky").addClass("sticky");
        //navbar.classList.add("sticky");
        $("#imageGallery").addClass("overlapping");
        //imageGallery.classList.add("overlapping");
        //var navIcon = document.getElementById("iconOpen");
        //navIcon.style.display = "block";
        $("#iconOpen").show();
    } 
    else {   
        $("#navBarSticky").removeClass("sticky");
        //navbar.classList.remove("sticky");
        $("#imageGallery").removeClass("overlapping");
        //imageGallery.classList.remove("overlapping")
       // var navIcon = document.getElementById("iconOpen");
        //navIcon.style.display = "none";
        $("#iconOpen").hide();
    }
});

/*
window.onscroll = function() {stickyNav()};
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
}*/

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



