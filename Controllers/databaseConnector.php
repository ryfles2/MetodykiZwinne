<?php

	$host = "localhost";
	$db_user = "root";
	$db_password = "";
	$db_name = "spsDb";
	$con=new mysqli($host,$db_user,$db_password, $db_name);
	if($con->connect_errno!=0)
	{
		echo "Connect error: ".$con->connect_error;
    }
	
?>