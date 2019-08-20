<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Order</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/scrollreveal@4"></script>
    <script src="responsiveslides.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.4.0.min.js"></script>  
</head>
<style>
.error {
    color: #FF0000;
    font-family: GothamPro-Medium;
    text-align: left;
    font-size: 20px;
    }
</style>
<body>
   <div id="navBarFixed">
    <img class="navLogo" src="Logos/logoVM.png"/ style="padding-left:20px;"> 
    <span id= "iconOpen"><i class="fas fa-bars" style="font-size:30px;color:black;padding-right: 25px;cursor: pointer"></i></span>
</div>

<div id="mySidenav" class="sidenav">
   <a href="javascript:void(0)" id="iconClose" class="closebtn" onclick="closeNav()">&times;</a>
   <a href="index.html">OVERVIEW</a>
   <a href="404.html">PORTRAIT</a>
   <a href="404.html">LIFESTYLE</a>
   <a href="404.html">FASHION</a>ss
   <a class="active" href="order.html">ORDER</a>
   <a href="info.php">INFO</a>
</div>
    <h1>Request a photoshoot<br></h1>
    
    <div class="requestContainer">
    <div class="requestForm">
    <h3 style="text-align:left; margin-left:-20px;"><span class="error">* required field</span></h3>
    
    <form method="post" action="ordersuccess.php">  
        <span class="error" style="margin-left:-20px;">*</span>
        First Name:<input type="text" class="inputField" name="firstName" value="<?php echo $firstName;?>"pattern="[A-Za-z]{3,}" required> <br>
        <span class="error" style="margin-left:-20px;">*</span>
        Second Name:<input type="text" class="inputField" name="secondName" value="<?php echo $secondName;?>"pattern="[A-Za-z]{3,}" required> <br>
        <span class="error" style="margin-left:-20px;">*</span>
        E-mail: <input type="text" class="inputField" name="email" value="<?php echo $email;?>" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.(?!ru)[a-z]{2,4}$" required><br>
        Phone Number: <input type="text" class="inputField" name="phoneNumber" value="<?php echo $phoneNumber;?>" pattern="[0-9]{10}"><br>
        <span class="error" style="margin-left:-20px;">*</span>
        Your city:<br>
        <select class="selectBlock" name="city" style="heigh:80px" required>
            <option <?php if(isset($city) && $city == "Lviv") echo "selected";?>>Lviv</option>
            <option <?php if(isset($city) && $city == "Kyiv") echo "selected";?>>Kyiv</option>
            <option <?php if(isset($city) && $city == "Berlin") echo "selected";?>>Berlin</option>
            <option <?php if(isset($city) && $ciyu == "Warsaw") echo "selected";?>>Warsaw</option>
            <option <?php if(isset($city) && $ciyu == "Other") echo "selected";?>>Warsaw</option>
            </select>
        <span class="error"><?php echo $cityERR;?></span>
        <span class="error" style="margin-left:-20px;">*</span>
        Use: <br> 
            <label class="container">Commercial
               <input type="radio" checked="checked" name="use" <?php if(isset($use) && $use == "Commerical") echo "checked";?>  value="Commerical">
               <span class="checkmark"></span>
            </label>
        
           <label class="container">Personal
               <input type="radio" name="use" name="use" <?php if(isset($use) && $use == "Personal") echo "checked";?> value="Personal">
               <span class="checkmark"></span>
           </label>
           
           <label class="container">Custom
               <input type="radio" name="use" name="use" <?php if(isset($use) && $use == "Custom") echo "checked";?> value="Custom">    
               <span class="checkmark"></span>
           </label>
        <span class="error"><?php echo $useERR;?></span>
        Comment: 
        <textarea name="comment" rows="8" cols="60" class="reviewArea"> <?php echo $comment;?> </textarea>
        <input type="submit" id="submitOrderButton" class="sumbitButton" value="Submit"> 
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

</body>
<script src="script.js"> </script>
<script src="script2.js"> </script>
</html>