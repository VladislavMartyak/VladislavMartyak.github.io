<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thank you for your order!</title>
    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.4.0.min.js"></script> 
</head>
<body>
    <?php
    
    $firstName = $secondName = $email = $phoneNumber = $city = $use = $comment = "";
  
    $firstName = test_input($_POST["firstName"]);
    $secondName = test_input($_POST["secondName"]);
    $email = test_input($_POST["email"]);
    $phoneNumber = test_input($_POST["phoneNumber"]);
    $city = test_input($_POST["city"]);
    $use = test_input($_POST["use"]);
    $comment = test_input($_POST["comment"]);
    
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    function randomPassword() {
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return $pass; //turn the array into a string
    }
    $passwordRandom = randomPassword();
    $passwordServer = implode($passwordRandom);
    
    $mysqli1 = new mysqli ("localhost", "root2", "", "MRTKBase");
    $mysqli1->query ("SET NAMES 'utf8'");
    $mysqli1->query("INSERT INTO `clientsOrdersRequest` (`id`, `firstName`, `secondName`, `email`, `phoneNumber`, `city`, `useFor`, `comment`, `status`, `date`) VALUES (NULL, '{$firstName}', '{$secondName}', '{$email}', '{$phoneNumber}', '{$city}', '{$use}', '{$comment}', 'Requested', CURRENT_TIMESTAMP)");
    $mysqli1->close();
    
    
    $mysqli2 = new mysqli ("localhost", "root2", "", "MRTKBase");
    $mysqli2->query ("SET NAMES 'utf8'");
    $mysqli2->query("INSERT INTO `clientsOrdersTrack` (`id`, `date`, `firstName`, `secondName`, `email`, `password`, `status`) VALUES (NULL, CURRENT_TIMESTAMP, '{$firstName}', '{$secondName}', '{$email}', '{$passwordServer}', 'Requested')");
    $mysqli2->close(); 
    
    ?>
  
   <div style="text-align: center"><img src="Logos/logoVM.png" height="90px" /></div>
   <div id="orderCompleted">
   <h2 style="text-align:center; margin-top:60px">Thank you for your order!</h2>
    <?php
    $firstName = $_POST['firstName'];
    $secondName = $_POST['secondName'];
    $city = $_POST['city'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    echo "<h3>Many thanks to you, $firstName!</h3>";
       
    $mysqli = new mysqli("localhost", "root2", "", "MRTKBase");
    $mysqli->query ("SET NAMES 'utf8'");
    $result = $mysqli->query("SELECT * FROM `availableCities` WHERE `cityName` LIKE '{$city}'");
    $row = $result->fetch_assoc();
    $congratulationServer = $row["congratulation"];
    echo "<h3>$congratulationServer</h3>";
    echo "<h3>Your password for tracking: $passwordServer</h3>";
    echo "<h3>Other details and this password<br>for tracking was sent to:<br><br>$email</h3>";
    if($phoneNumber != ""){
        echo "<h3>And I'll text you on $phoneNumber</h3>";
    }
    echo "<h3>Have a nice day!</h3>";
    ?>
    <button id="goBackButton" class="sumbitButton" onclick="goBack()" style="width: 170px;">MAIN PAGE</button>
    
</div>
</body>
<script src="script2.js"></script>
</html>