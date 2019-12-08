<?php
require_once "databaseConnector.php";

$login = $_GET['login'];
$password = $_GET['pass'];

$selectUser_sql = "SELECT COUNT(*) as fndUserWithCrede FROM Users WHERE login=\"$login\" AND password =\"$password\"";
$result = $con->query($selectUser_sql);

$foundUsers =  mysqli_fetch_assoc($result)['fndUserWithCrede'];

if($foundUsers == 1)
{
    $response = array(
        'status' => 'success'
    );
}
else
{
    $response = array(
        'status' => 'failed'
    );
}

echo json_encode($response);

?>