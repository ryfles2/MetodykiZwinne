<?php
require_once "databaseConnector.php";

$id = $_GET['id'];
$type = $_GET['type'];

$updateUsersTypeQuery = "UPDATE users SET type = \"$type\" WHERE id = \"$id\"";
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