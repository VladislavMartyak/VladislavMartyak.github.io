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
var main = document.getElementById("main");
var sticky = navbar.offsetTop;
       
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        main.classList.add("overlapping")
        var navIcon = document.getElementById("iconOpen");
        navIcon.style.display = "block";
    } 
    else {   
        navbar.classList.remove("sticky");
        main.classList.remove("overlapping")
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



var myIndex1 = 0, myIndex2 = 0, myIndex3 = 0, myIndex4 = 0, myIndex5 = 0, myIndex6 = 0, myIndex7 = 0, myIndex8 = 0, myIndex9 = 0;
var container1 = document.getElementsByClassName('story_image1')[0], container2 = document.getElementsByClassName('story_image2')[0],
    container3 = document.getElementsByClassName('story_image3')[0], container4 = document.getElementsByClassName('story_image4')[0],
    container5 = document.getElementsByClassName('story_image5')[0], container6 = document.getElementsByClassName('story_image6')[0],
    container7 = document.getElementsByClassName('story_image7')[0], container8 = document.getElementsByClassName('story_image8')[0],
    container9 = document.getElementsByClassName('story_image9')[0];

carousel1(), carousel2(), carousel3(), carousel4(), carousel5(), carousel6(), carousel7(), carousel8(), carousel9();

function carousel1() {
    var i, element1;
    var slides1 = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.opacity = "0";
        }
    myIndex1++;
    if (myIndex1 > slides1.length) {
        myIndex1 = 1
        }
    element1 = slides1[myIndex1 - 1];
    container1.style.height = element1.height + 'px';
    setTimeout(function() {element1.style.opacity = "1"; setTimeout(carousel1, 6050);},500);
}

function carousel2() {
    var i, element2;
    var slides2 = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.opacity = "0";
        }
    myIndex2++;
    if (myIndex2 > slides2.length) {
        myIndex2 = 1
        }
    element2 = slides2[myIndex2 - 1];
    container2.style.height = element2.height + 'px';
    setTimeout(function() {element2.style.opacity = "1"; setTimeout(carousel2, 6250);},650);
}

 
function carousel3() {
    var i, element3;
    var slides3 = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.opacity = "0";
        }
    myIndex3++;
    if (myIndex3 > slides3.length) {
        myIndex3 = 1
        }
    element3 = slides3[myIndex3 - 1];
    container3.style.height = element3.height + 'px';
    setTimeout(function() {element3.style.opacity = "1"; setTimeout(carousel3, 6490);},750);
}


function carousel4() {
    var i, element4;
    var slides4 = document.getElementsByClassName("mySlides4");
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.opacity = "0";
        }
    myIndex4++;
    if (myIndex4 > slides4.length) {
        myIndex4 = 1
        }
    element4 = slides4[myIndex4 - 1];
    container4.style.height = element4.height + 'px';
    setTimeout(function() {element4.style.opacity = "1"; setTimeout(carousel4, 6400);},600);
}


function carousel5() {
    var i, element5;
    var slides5 = document.getElementsByClassName("mySlides5");
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.opacity = "0";
        }
    myIndex5++;
    if (myIndex5 > slides5.length) {
        myIndex5 = 1
        }
    element5 = slides5[myIndex5 - 1];
    container5.style.height = element5.height + 'px';
    setTimeout(function() {element5.style.opacity = "1"; setTimeout(carousel5, 6650);},500);
}


function carousel6() {
    var i, element6;
    var slides6 = document.getElementsByClassName("mySlides6");
    for (i = 0; i < slides6.length; i++) {
        slides6[i].style.opacity = "0";
        }
    myIndex6++;
    if (myIndex6 > slides6.length) {
        myIndex6 = 1
        }
    element6 = slides6[myIndex6 - 1];
    container6.style.height = element6.height + 'px';
    setTimeout(function() {element6.style.opacity = "1"; setTimeout(carousel6, 6250);},650);
}


function carousel7() {
    var i, element7;
    var slides7 = document.getElementsByClassName("mySlides7");
    for (i = 0; i < slides7.length; i++) {
        slides7[i].style.opacity = "0";
        }
    myIndex7++;
    if (myIndex7 > slides7.length) {
        myIndex7 = 1
        }
    element7 = slides7[myIndex7 - 1];
    container7.style.height = element7.height + 'px';
    setTimeout(function() {element7.style.opacity = "1"; setTimeout(carousel7, 7000);},550);
}

function carousel8() {
    var i, element8;
    var slides8 = document.getElementsByClassName("mySlides8");
    for (i = 0; i < slides8.length; i++) {
        slides8[i].style.opacity = "0";
        }
    myIndex8++;
    if (myIndex8 > slides8.length) {
        myIndex8 = 1
        }
    element8 = slides8[myIndex8 - 1];
    container8.style.height = element8.height + 'px';
    setTimeout(function() {element8.style.opacity = "1"; setTimeout(carousel8, 7500);},750);
}


function carousel9() {
    var i, element9;
    var slides9 = document.getElementsByClassName("mySlides9");
    for (i = 0; i < slides9.length; i++) {
        slides9[i].style.opacity = "0";
        }
    myIndex9++;
    if (myIndex9 > slides9.length) {
        myIndex9 = 1
        }
    element9 = slides9[myIndex9 - 1];
    container9.style.height = element9.height + 'px';
    setTimeout(function() {element9.style.opacity = "1"; setTimeout(carousel9, 7250);},650);
}

var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName('story_image1')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image2')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image3')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image4')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image5')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image6')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image7')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image8')[0].style.backgroundColor = "white";
        document.getElementsByClassName('story_image9')[0].style.backgroundColor = "white";
    }
}
else {
    if (document.body) {
        document.body.style.backgroundColor = "black";
        document.getElementsByClassName('story_image1')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image2')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image3')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image4')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image5')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image6')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image7')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image8')[0].style.backgroundColor = "black";
        document.getElementsByClassName('story_image9')[0].style.backgroundColor = "black"; 
    }
}




