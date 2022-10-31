<?php
  session_start();
  class Result {
  }
  class DBConnection {
    private $servername   = "localhost";
    private $dbusername   = "root";
    private $dbpassword   = "root";
    private $dbname       = "ibm";
    public function dbResult($code, $msg){
      $myObj = new Result();
      $myObj->code = $code;
      $myObj->msg  = $msg;
      $myJSON = json_encode($myObj);
      return $myJSON;
    }
    public function checkUser($username, $password){
      $conn = new mysqli($this->servername, $this->dbusername, $this->dbpassword, $this->dbname) or die($this->dbResult(500, "db conn error"));
      
      $sql = "CREATE TABLE IF NOT EXISTS user(
        username varchar(50),
        mailid varchar(50),
        password varchar(50)
      )";
        
      if ($conn->query($sql) === TRUE) {
      } else {
        echo "Error creating table: " . $conn->error;
      }
      
      $query = "select * from user where username='".$username."' and password='".$password."' limit 1";
      $result=$conn->query($query);
      if($row=$result->fetch_assoc()){
        $_SESSION["login"]="True";
        $_SESSION['user']=$username;
        return $this->dbResult(200, "login succesfull - ".$row['username']);;
      }else{
        return $this->dbResult(403, "login failed");
      }
    }
    public function registerUser($username, $emailId, $password){
      $conn = new mysqli($this->servername, $this->dbusername, $this->dbpassword, $this->dbname) or die($this->dbResult(500, "db conn error"));
      
      $sql = "CREATE TABLE IF NOT EXISTS user(
        username varchar(50),
        mailid varchar(50),
        password varchar(50)
      )";
        
      if ($conn->query($sql) === TRUE) {
      } else {
        //echo "Error creating table: " . $conn->error;
      }
      
      $query = "insert into user values('".$username."','".$emailid."','".$password."')";
      if ($conn->query($query)===TRUE){
        return $this->dbResult(200,"register succesfull");
      }else{
        return $this->dbResult(500,"insert failed");
      }
    }
  }
?>