## Ng2Uploadfile
Clone Source from github
git clone https://github.com/sutin1234/ng2-uploadfile.git

## go to ng2-uploadfile
cd ng2-uploadfile

## install npm libraly
npm install

## create file server to upload file

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

## Running 
ng serve