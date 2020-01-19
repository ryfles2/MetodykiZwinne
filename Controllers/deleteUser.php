<?php
require_once "databaseConnector.php";

$id = $_GET['id'];

$deleteUser_sql = "DELETE FROM Users WHERE id = \"$id\"";

$result = $con->query($deleteUser_sql);


if($result)
{
    $response = array(
        'status' => 'success',
        'description' => 'User deleted'
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
