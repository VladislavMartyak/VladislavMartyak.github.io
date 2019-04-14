/*----Cool scroll effect by ScrollReveal library----*/
/*=========================================================================================*/
ScrollReveal().reveal("#slides1"); 
ScrollReveal().reveal("#slides2"); 
ScrollReveal().reveal("#slides3");
ScrollReveal().reveal("#slides4"); 
ScrollReveal().reveal("#slides5"); 
ScrollReveal().reveal("#slides6");
ScrollReveal().reveal("#slides7"); 
ScrollReveal().reveal("#slides8"); 
ScrollReveal().reveal("#slides9");

/*----Hide and show open/close navbar icon----*/
/*=========================================================================================*/

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

/*----Hide and show open/close navbar icon----*/
/*=========================================================================================*/
window.onscroll = function() {stickyNav()};
//var $navbar = document.getElementById("navBarSticky");
//var $sticky = $navbar.offsetTop;
var $sticky = $("#navBarSticky").offset().top;

$(window).scroll(function(){
    if (window.pageYOffset >= $sticky) {  
        $("#navBarSticky").addClass("sticky");
        $("#imageGallery").addClass("overlapping");
        $("#iconOpen").show();
    } 
    else {   
        $("#navBarSticky").removeClass("sticky");
        $("#imageGallery").removeClass("overlapping");
        $("#iconOpen").hide();
    }
});

/*----Auto-slide for images on the front page----*/
/*=========================================================================================*/

$(function() {
    $("#slides1").responsiveSlides({
        speed: 800,            
        timeout: 9000,
        random: true
    });
  });

$(function() {
    $("#slides4").responsiveSlides({
        speed: 800,           
        timeout: 9000,
        random: true
    });
  });

$(function() {
    $("#slides7").responsiveSlides({
        speed: 800,        
        timeout: 9000,
        random: true
    });
  });


$(function() {
    $("#slides2").responsiveSlides({
        speed: 800,           
        timeout: 11000,
        random: true
    });
  });

$(function() {
    $("#slides5").responsiveSlides({
        speed: 800,           
        timeout: 11000,
        random: true    
    });
  });

$(function() {
    $("#slides8").responsiveSlides({
        speed: 800,       
        timeout: 11000,
        random: true
    });
  });


$(function() {
    $("#slides3").responsiveSlides({
        speed: 800,         
        timeout: 13000,
        random: true
    });
  });

$(function() {
    $("#slides6").responsiveSlides({
        speed: 800,           
        timeout: 13000,
        random: true
    });
  });


$(function() {
    $("#slides9").responsiveSlides({
        speed: 800,         
        timeout: 13000,
        random: true
    });
  });


/*----Check if user missed some lines----*/
/*=========================================================================================*/


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




