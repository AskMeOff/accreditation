<?php

include "../../ajax/connection.php";

$id_uz = $_GET['id_uz'];


$query = "select * from accreditation.applications a
         left join users u on u.id_user = a.id_user
         left join uz uz on uz.id_uz = u.id_uz
         where a.id_user = $id_uz
";



$rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));




for ($data = []; $row = mysqli_fetch_assoc($rez); $data[] = $row);

    
    
    foreach ($data as $app) {

        echo "<div onclick=newShowModal1("."'".$app['id_application']."'".")>"  .$app['id_application'] . "</div>". "<br>";


    }


mysqli_close($con);