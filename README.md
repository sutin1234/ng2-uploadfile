## Ng2Uploadfile
Clone Source from github
git clone https://github.com/sutin1234/ng2-uploadfile.git

## go to ng2-uploadfile
cd ng2-uploadfile

## install npm libraly
npm install

## create file server to upload file
## <?php
	header('Access-Control-Allow-Origin: *');
	$files = $_FILES['file'];
	if(move_uploaded_file($files['tmp_name'],$files['name'])){
		echo 1;
	}else{
		echo 'Error! Uploaded files';
	}
?>

## Running 
ng serve