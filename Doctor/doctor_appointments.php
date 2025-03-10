<?php

    session_start();

    // If logged out and session variables are empty then return to login page
    if(empty($_SESSION['did'])){
        
        echo '<script>window.location= "doctor_login.php";</script>';
        exit();
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../StylesD/doctor_appointments.css">

    <!-- Scripts only --> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> 
    <script src="../AppsD/doctor_appointments_ajax.js" async></script>

    <title>Appointments</title>
</head>

<body>

    <?php
        // Including doctor panel navbar
        include('dpnav.php');
    ?>

    <!--Main Section-->
    <div class="main" id="main">  
    </div>
    
</body>

</html>
