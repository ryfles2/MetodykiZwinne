<?php
require_once "databaseConnector.php";

$id = $_GET['id'];
$state = $_GET['state'];

$updateLockersQuery = "UPDATE lockers SET state = \"$state\" WHERE id = \"$id\"";
$result = $con->query($updateLockersQuery);
if($result)
{
    echo "Success";
}   
else
{
    echo "Failed";
    echo "Database problem";
}

?>