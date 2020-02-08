<?php
require_once "databaseConnector.php";

$login = $_GET['login'];
$password = $_GET['pass'];
$selectErrors = "SELECT id,login,type FROM Users  WHERE login=\"$login\" AND password =\"$password\"";
$result = $con->query($selectErrors);
if ($result->num_rows > 0) {

    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode($response);
}

?>