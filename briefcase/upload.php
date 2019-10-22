<?php
error_reporting(E_ALL);
/* Getting file name */
$filename = $_FILES['file']['name'];

/* Location */
$location = "/var/www/html/vidchat/chumbahan/briefcase/upload/".$filename;
$uploadOk = 1;
$imageFileType = pathinfo($location,PATHINFO_EXTENSION);



$filename = $_FILES['file']['name'];
$filetype = $_FILES['file']['type'];
$filesize = $_FILES['file']['size'];

$append_name = time();
$parid_old = explode(".", $_FILES['file']['name']);
                        $parid_new = $append_name . '.' . end($parid_old);
/* Valid extensions */
$valid_extensions = array("jpg","jpeg","png");

/* Check file extension */
// if(!in_array(strtolower($imageFileType), $valid_extensions)) {
//    $uploadOk = 0;
// }

// if($uploadOk == 0){
//    echo 0;
// }else{
//    /* Upload file */
//    if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
//      echo $location;
//    }else{
//      echo 0;
//    }
// }


move_uploaded_file($_FILES['o-idpic_parent']['tmp_name'], '../parent_id/' . $parid_new;

//second row