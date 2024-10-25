<?php
include "connection.php";


$login = $_COOKIE['login'];



if (!file_exists('docs/docs/documents/'.$login)) {
    mkdir('docs/docs/documents/'.$login, 0777, true);
}




if (isset($_FILES['myF']['name'])) {
    $file_name = $_FILES['myF']['name'];
    $file_tmp = $_FILES['myF']['tmp_name'];

    move_uploaded_file($file_tmp, "./docs/docs/documents/" . $login . "/" . $file_name);

}


?>