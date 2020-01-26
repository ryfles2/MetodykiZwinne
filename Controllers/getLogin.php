<?php
require_once "databaseConnector.php";

$login = $_GET['login'];
$password = $_GET['pass'];
$selectErrors = "SELECT id,login,type FROM Users  WHERE login=\"$login\" AND password =\"$password\"";
$result = $con->query($selectErrors);
if ($result->num_rows > 0) {
    $Errors =[];
    while($row = $result->fetch_assoc()) {
		array_push($Errors,$row);
    }
    echo json_encode($Errors);
	$response = array(
   'state' => '0'
   );
    echo json_encode($response);
} else {
   $response = array(
   'state' => '1'
   );
    echo json_encode($response);
}

?>