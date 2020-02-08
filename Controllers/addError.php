<?php
header("Access-Control-Allow-Origin: *");
require_once "databaseConnector.php";

$msg = $_GET['message'];
$lockId = $_GET['lockId'];
$state = $_GET['state'];

    $addError_sql = "INSERT INTO errors (message, locker_id, state)
    VALUES ($msg, $lockId, $state)";
    $result = $con->query($addError_sql);

    if($result)
    {
        $response = array(
        'status' => '0',
        'description' => 'Error added
    );
    }
    else
    {
        $response = array(
        'status' => '1',
        'description' => 'Database problem'
    );
    }
echo json_encode($response);
?>