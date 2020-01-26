<?php
require_once "databaseConnector.php";

$id = $_GET['id'];
$state = $_GET['state'];

$updateUsersTypeQuery = "UPDATE errors SET state = \"$state\" WHERE id = \"$id\"";
$result = $con->query($updateUsersTypeQuery);
if($result)
{
    $response = array(
        'status' => '0',
        'description' => 'Error added'
    );
}   
else
{
    $response = array(
        'status' => '1',
        'description' => 'Database problem'
    );
}

?>