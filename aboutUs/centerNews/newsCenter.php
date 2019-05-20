<?php
	$conn=mysqli_connect("127.0.0.1","root","","h1902",3306);
	$sql="SELECT * FROM news";
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while($row=mysqli_fetch_row($result)){
		array_push($arr,$row);
	}
	echo JSON_encode($arr);
?>