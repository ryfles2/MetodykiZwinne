<?php
require_once "databaseConnector.php";

$selectLockers = "SELECT id, login, type FROM Users";
$result = $con->query($selectLockers);
if ($result->num_rows > 0) {
    $users =[];
    while($row = $result->fetch_assoc()) {
		array_push($users,$row);
    }
    echo json_encode($users);
} else {
    echo "0 results";
}
?>