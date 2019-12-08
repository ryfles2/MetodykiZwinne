<?php
require_once "databaseConnector.php";

$login = $_GET['login'];

$selectUserType_sql = "SELECT login, type FROM Users WHERE login=\"$login\"";
$result = $con->query($selectUserType_sql);

$response = $result->fetch_assoc();

echo json_encode($response);


?>