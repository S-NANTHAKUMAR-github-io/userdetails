<?php
    error_reporting(E_ERROR | E_PARSE);
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet" type="text/css" href="./static/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" 
integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="./static/js/main.js"></script>
    </head>
    <body background="tmp.jpg">
        <?php
            if($_SESSION["login"]){
        ?>
                <button id="logout" >Logout</button>
               <h1> Welcome <?php echo $_SESSION['user'];?> </h1>
                <script src='./static/js/logout.js'></script>
        <?php
            }else{
        ?>
                <script src="./static/js/login-construnction.js"></script>
        <?php
            }
        ?>
    </body>
</html>
