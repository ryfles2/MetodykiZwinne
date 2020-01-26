<?php
require_once "databaseConnector.php";

$id = $_GET['id'];
$state = $_GET['state'];

$updateUsersTypeQuery = "UPDATE errors SET state = \"$state\" WHERE id = \"$id\"";
$result = $con->query($updateUsersTypeQuery);
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