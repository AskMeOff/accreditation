<?php
error_reporting(E_ALL);
ini_set('display_errors','on');
$host='localhost';
$user='root';
$password='sdhdf(363#94KFUgfy';
$database='accreditation';
$con = mysqli_connect($host, $user, $password, $database) or die("Ошибка подключения " . mysqli_error($con));
mysqli_query($con, "SET NAMES 'utf8'");

?>
