<?php
require_once "databaseConnector.php";

$selectErrors = "SELECT id, message, state FROM errors";
$result = $con->query($selectErrors);
if ($result->num_rows > 0) {
    $Errors =[];
    while($row = $result->fetch_assoc()) {
		array_push($Errors,$row);
    }
    echo json_encode($Errors);
} else {
    echo "0 results";
}
?>