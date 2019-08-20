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
var $sticky = $("#navBarSticky").offset().top;
window.onscroll = function() {stickyNav()};
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

