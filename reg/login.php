<?php
    error_reporting(E_ERROR | E_PARSE);
    session_start();
    include("./lib/dao.inc");
    $obj = new DBConnection();
    echo $_POST['username'];
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $username = $data->username;
    $password = $data->password;
    if(isset($username) && isset($password) ) {
        echo $obj->checkUser($username, $password);
        
        
    }else{
        echo $obj->dbResult(403, "method not allowed");
    }
?>