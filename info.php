<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Order</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> 
    <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/charts.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/dataviz.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
    <script src="jquery-3.4.0.min.js"></script>  
    <script src="https://unpkg.com/scrollreveal@4"></script>
    <script src="responsiveslides.min.js"></script>
</head>
<?php
    $email = $password = "";
    $email = test_input($_POST["email"]);
    $password = test_input($_POST["password"]);
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    ?>
<body>
   <div id="navBarFixed">
    <img class="navLogo" src="Logos/logoVM.png"/ style="margin-left:20px"> 
    <span id= "iconOpen"><i class="fas fa-bars" style="font-size:30px;color:black;padding-right: 25px;cursor: pointer"></i></span>
</div>

<div id="mySidenav" class="sidenav">
   <a href="javascript:void(0)" id="iconClose" class="closebtn" onclick="closeNav()">&times;</a>
   <a href="index.html">OVERVIEW</a>
   <a href="404.html">PORTRAIT</a>
   <a href="404.html">LIFESTYLE</a>
   <a href="404.html">FASHION</a>
   <a href="order.php">ORDER</a>
   <a class="active" href="info.html" >INFO</a>
</div>
   
    <h1>Info<br></h1>
    <h2>What to know how many shoots did I have?</h2>
    <h3>Here is a radial histogram `cause we all love numbers` where you can see<br> 
        the exact amount of clients I had last year per months. Just try it!</h3>
    <div id="chartdiv"></div>		
    <script  src="amCharts4.js"></script>
    
    <h4></h4>
    
    <div class="requestContainer">
    <div class="requestForm">
       <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
        <h2>Do you want to track your order?</h2>
        <h3>Don't worry, cause there two options: I'm drinking my beer or  
        editing your pics. Just track in what status your pics are!</h3>
        E-mail: <input type="text" class="inputField" id="fieldEmail" name="email" value="<?php echo $email;?>" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.(?!ru)[a-z]{2,4}$"><br>
        Password: <input type="password" class="inputField" id="fiedPassword" name="password" value="<?php echo $password;?>"><br>
        <input type="submit" id="submitOrderButton" class="sumbitButton" value="Submit"> 
        </form>
         <?php
            $mysqli = new mysqli("localhost", "root2", "", "MRTKBase");
            $mysqli->query ("SET NAMES 'utf8'");
            $result = $mysqli->query("SELECT * FROM `clientsOrdersTrack` WHERE `email` LIKE '{$email}' AND `password` LIKE '{$password}'");
            $row = $result->fetch_assoc();
            $statusServer = $row["status"];
            $firstNameServer = $row["firstName"];
            if($statusServer != ""){
                echo "<h2><br>TRACKED:</h2>";
                echo  "<h3>Hi, $firstNameServer! What a beautiful day is today,<br>isn't it? Hope you are enjoing it.<br><br>Status: $statusServer</h3>";
                echo "<h3>Have a great time!</h3>";
            }
            else{
                echo "<h2><br>Could not be tracked!</h2>";
                echo "<h3>Sorry, but it seems like you didn't ordered a photoshoot or you typed in wrong data. </h3>";
                echo "<h3>Please try again!</h3>";
            }
            $mysqli->close()
           ?>
        
        <h4> </h4>
        
        <form action="" method="get">
        <h2>Did you like my photos?</h2>
        <h3>Everybody asks you to write a review and I'm not an exception  
        here.Please, let me know, I'll be very grateful!</h3>
        <textarea rows="8" cols="60" class="reviewArea">This was the best photoshoot in my life! I highly recommend this photographer to anyone, who wants ideal pics and amazing atmosphere. The prints were unbelievable with such sharpness and quality. I've got what I wanted so far, thanks!
        </textarea>
        <input type="submit" onClick="return empty()" class="sumbitButton" value="Submit">
        </form>
        </div>
    </div>
    
<div class="footer">
    <div class="footerContent container-fluid">
        <div class="container-fluid col-lg-6 col-md-5 col-sm-6 col-6" style="padding-left: 0px; font-size: 30px"><h1>ALWAYS CREATE</h1></div>
        <div class="container-fluid col-lg-6 col-md-5 col-sm-6 col-6">
            <div class="socialLinks">
                <a class="socialLink" href="https://www.instagram.com/vladislavmartyak/" target="_blank" title="Instagram"><i class="fab fa-instagram" style="font-size:20px;color:white; padding-right:10px;"></i></a>
                <a class="socialLink" href="https://www.facebook.com/VladislavMartyak" target="_blank" title="Facebook"><i class="fab fa-facebook-square" style="font-size:20px;color:white; padding-right:10px;"></i></a>
                <a class="socialLink" href="https://t.me/vladislavmartyak" target="_blank" title="Telegram"><i class="fab fa-telegram-plane" style="font-size:20px;color:white; padding-right:10px;"></i></a>
        </div>
        <p1>#2019 Vladislav Martyak</p1>
        </div>
    </div>
</div>

<script src="script.js"> </script>
</body>
</html>