<?php
	header("content-type:text/html;charset=utf-8");
	//第一种使用form表单提交数据
	@$username=$_GET['data'];
//	@$password=$_GET['password'];
	echo "data is".$username;
	echo "<br/>";
//	echo $password;
?>