<?php
require_once "databaseConnector.php";

$id = $_GET['id'];
$type = $_GET['type'];

$updateUsersTypeQuery = "UPDATE users SET type = \"$type\" WHERE id = \"$id\"";
$result = $con->query($updateUsersTypeQuery);
if($result)
{
    $response = array(
        'status' => '0',
        'description' => 'User added'
    );
}   
else
{
    $response = array(
        'status' => '1',
        'description' => 'Database problem'
}

?>