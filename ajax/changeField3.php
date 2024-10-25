<?php

include "connection.php";
if (isset($_GET['idCrit'], $_GET['idDep'], $_GET['val'], $_GET['idAnswerCriteria'])) {
    $idCrit = $_GET['idCrit'];
    $idDep = $_GET['idDep'];
    $val = $_GET['val'];
    $id_answer_criteria = $_GET['idAnswerCriteria'];
    $id_userOlys = $_GET['id_userOlys'];
    $id_app = $_GET['id_app'];


    mysqli_query($con, "update z_answer_criteria set field3 = '$val' where id_answer_criteria = '$id_answer_criteria'");
    $rez = mysqli_query($con, "select count(*) as coun from z_answer_criteria as za right join z_criteria as zc on zc.id_criteria=za.id_criteria where id_department='$idDep'");

    if (mysqli_num_rows($rez) == 1) //если получена одна строка
    {
        $row = mysqli_fetch_assoc($rez); //она
        $count_all = $row['coun'];
    }

    $rez = mysqli_query($con, "select count(*) as coun from z_answer_criteria  as za right join z_criteria as zc on zc.id_criteria=za.id_criteria where id_department='$idDep' and field3 = 1");

    if (mysqli_num_rows($rez) == 1) //если получена одна строка
    {
        $row = mysqli_fetch_assoc($rez); //она
        $count_yes = $row['coun'];
    }

    $rez = mysqli_query($con, "select count(*) as coun from z_answer_criteria  as za right join z_criteria as zc on zc.id_criteria=za.id_criteria where id_department='$idDep' and field3 = 3");

    if (mysqli_num_rows($rez) == 1) //если получена одна строка
    {
        $row = mysqli_fetch_assoc($rez); //она
        $count_notneed = $row['coun'];
    }

    if ($count_all - $count_notneed !== 0)
        $mark_department = ($count_yes / ($count_all - $count_notneed)) * 100;


    if ($count_yes === "0") {
        $mark_department = 0;
    }
    $mark_department = round($mark_department, 0);
    if ($count_all === $count_notneed) {
        $mark_department = "-";
    }

    mysqli_query($con, "update z_department set mark_percent = '$mark_department', mark_all = '$count_all', mark_yes='$count_yes', mark_not_need='$count_notneed' where id_department='$idDep'");

    $id_subvision = $_GET['id_sub'];

    $rez = mysqli_query($con, "select avg(mark_percent) as coun from z_department where id_subvision='$id_subvision'");

    if (mysqli_num_rows($rez) == 1) //если получена одна строка
    {
        $row = mysqli_fetch_assoc($rez); //она
        $count_all = $row['coun'];
        if ($count_all === null) {
            $count_all = 0.0;
        }
        $count_all = round($count_all, 0);
        mysqli_query($con, "update subvision set mark_percent = '$count_all' where id_subvision='$id_subvision'");
    }

    function getUserIpAddr()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }

    $ip_address = getUserIpAddr();
    $date_create = date('Y-m-d H:i:s');
    $action = "Смена Ответа field3 на $val";

    $sqlinsert = "INSERT INTO Aalog1_actions (date_create, action, ip_adress, id_user, id_application, id_subvision, id_department, id_answer_criteria, id_crit) 
VALUES ('$date_create', '$action', '$ip_address', '$id_userOlys', '$id_app', '$id_subvision', '$idDep', '$id_answer_criteria' , '$idCrit')";
    if (mysqli_query($con, $sqlinsert)) {
        echo "Запись успешно добавлена в логи.";
    } else {
        echo "Ошибка: " . $sqlinsert . "<br>" . mysqli_error($con);
    }
}
else {
    echo 0;
}

mysqli_close($con);