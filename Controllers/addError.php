<?php
require_once "databaseConnector.php";

$msg = $_GET['message'];
$lockId = $_GET['locker_id'];
$state = $_GET['state'];

    $addError_sql = "INSERT INTO errors (message, locker_id, state)
    VALUES ($msg, $lockId, $state)";
    $result = $con->query($addError_sql);

    if($result)
    {
        $response = array(
        'status' => 'success',
        'description' => 'Error added'
    );
    }
    else
    {
        $response = array(
        'status' => 'failed',
        'description' => 'Database problem'
    );
    }
echo json_encode($response);
?>