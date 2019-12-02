<?php
require_once "databaseConnector.php";

$login = $_GET['login'];
$password = $_GET['pass'];
$userType = $_GET['type'];

$selectUser_sql = "SELECT COUNT(*) as fndLogin FROM Users WHERE login=\"$login\"";
$result = $con->query($selectUser_sql);

$foundUsers =  mysqli_fetch_assoc($result)['fndLogin'];

if($foundUsers == 1)
{
    echo "Failed";
    echo "This user already exists";
}
else
{
    $addUser_sql = "INSERT INTO Users (login, password, type)
                    VALUES (\"$login\", \"$password\", \"$userType\")";
    $result = $con->query($addUser_sql);
    
    if($result)
    {
        echo "Success";
    }   
    else
    {
        echo "Failed";
        echo "Database problem";
    }

}

?>