<?php
    error_reporting(E_ERROR | E_PARSE);
    session_start();
    include("./lib/dao.inc");
    $obj = new DBConnection();
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $username = $data->username;
    $password = $data->password;
    $mailid   = $data->mailid;
    if(isset($username) && isset($mailid)  &&  isset($password) ) {
        echo $obj->registerUser($username, $mailid,  $password);
    }else{
        echo $obj->dbResult(403, "method not allowed");
    }
?>