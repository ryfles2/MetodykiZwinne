<?php
require_once "databaseConnector.php";

$id = $_GET['id'];
$state = $_GET['state'];

$updateLockersQuery = "UPDATE lockers SET state = \"$state\" WHERE id = \"$id\"";
$resultForUdpate = $con->query($updateLockersQuery);
if($resultForUdpate)
{
    echo "Success";

    if($state == 1)
    {
        $today = date("Y/m/d");
        $statisticsQuery = "SELECT used from dayStatistics WHERE day = \"$today\"";
        $resultForStatistics = $con->query($statisticsQuery);
        if ($resultForStatistics->num_rows > 0)
        {
            while($row = $resultForStatistics->fetch_assoc())
            {
                $currentUsed =  $row['used'];
            }

            $currentUsed+=1;

            $updateStatsticsQuery = "UPDATE dayStatistics SET used = \"$currentUsed\" WHERE day = \"$today\"";
        }
        else
        {
            $updateStatsticsQuery = "INSERT INTO dayStatistics (day,used) VALUES (\"$today\",1)";
        }

        $resultForUdpate = $con->query($updateStatsticsQuery);

    }
}   
else
{
    echo "Failed";
    echo "Database problem";
}

?>