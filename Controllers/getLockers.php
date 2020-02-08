<?php
header("Access-Control-Allow-Origin: *");
require_once "databaseConnector.php";

$selectLockers = "SELECT id, state FROM lockers";
$result = $con->query($selectLockers);
if ($result->num_rows > 0) {
    $lockers =[];
    while($row = $result->fetch_assoc()) {
		array_push($lockers,$row);
    }
    echo json_encode($lockers);
} else {
    echo "0 results";
}
?>