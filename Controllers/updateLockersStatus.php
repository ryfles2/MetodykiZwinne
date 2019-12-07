<?php

$id = $_GET['number'];
$state = $_GET['state'];

$updateLockersQuery = "UPDATE lockers SET state = \"$login\" WHERE id = \"$id\"";
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