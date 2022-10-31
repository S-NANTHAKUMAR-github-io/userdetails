<?php
    session_start();
    error_reporting(E_ERROR | E_PARSE);
    session_destroy();
    echo "{\"code\":\"200\", \"msg\":\"logout successfull\"}";
?>