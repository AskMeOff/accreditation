<?php
include "connection.php";
$id_sub = $_GET['id_sub'];
$id_list_tables_criteria =  $_GET['id_list_tables_criteria'];
$department =  $_GET['department'];
$login=  $_COOKIE['login'];

$w = "SELECT `name` from z_list_tables_criteria where id_list_tables_criteria = '$id_list_tables_criteria'";
$e = mysqli_query($con, $w) or die("Ошибка " . mysqli_error($con));

if (mysqli_num_rows($e) == 1) {
    $ro = mysqli_fetch_assoc($e);
    $name_table = $ro['name'];
}
$fullName = $department. " (". $name_table . ")";
$q = "SELECT * from z_department where `name` ='$fullName' and id_subvision = '$id_sub' ";
$r = mysqli_query($con, $q) or die("Ошибка " . mysqli_error($con));

if (mysqli_num_rows($r) == 0) {

    $query = "SELECT * from z_selected_tables where id_list_tables_criteria ='$id_list_tables_criteria' and id_subvision = '$id_sub' ";
    $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));

    if (mysqli_num_rows($rez) > 0) {
        $query = "UPDATE  z_selected_tables SET id_list_tables_criteria ='$id_list_tables_criteria' , id_subvision = '$id_sub',`count`=`count`+1
              where id_list_tables_criteria ='$id_list_tables_criteria' and id_subvision = '$id_sub'  ";
        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
    } else {
        $query = "insert  into z_selected_tables (id_list_tables_criteria,id_subvision, `count`) values  ('$id_list_tables_criteria' , '$id_sub' , '1')";
        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
    }

    $query = "SELECT * FROM accreditation.z_department zd 
left join subvision zs on zd.id_subvision=zs.id_subvision
left join z_list_tables_criteria zltc on zltc.id_list_tables_criteria=zd.id_list_tables_criteria
where zs.id_subvision = '$id_sub' and zltc.level = 1";
    $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
    $row = mysqli_fetch_assoc($rez);
    if(mysqli_num_rows($rez) > 0) {
        $mainDep = $row['id_department'];
        $mainIdListCrit = $row['id_list_tables_criteria'];
    }


    $query = "insert  into z_department (`id_list_tables_criteria`,`name`, id_subvision) values  ('$id_list_tables_criteria','$fullName' , '$id_sub')";
    $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));


    $insertedId = mysqli_insert_id($con);

    $query3 = "SELECT * FROM z_department WHERE id_department = '$insertedId' ";
    $rez3 = mysqli_query($con, $query3) or die("Ошибка " . mysqli_error($con));

    if (mysqli_num_rows($rez3) == 1) {
        $row3 = mysqli_fetch_assoc($rez3);
        $id_department = $row3['id_department'];

        $query5 = "SELECT id_criteria, pp, z_criteria.`name` FROM z_criteria WHERE id_list_tables_criteria = '$id_list_tables_criteria' ";
        $rez5 = mysqli_query($con, $query5) or die("Ошибка " . mysqli_error($con));

        while ($row5 = mysqli_fetch_assoc($rez5)) {
            $id_crit = $row5['id_criteria'];
            $query4 = "INSERT INTO z_answer_criteria (id_department, id_criteria) 
                       SELECT '$id_department', '$id_crit'
                       WHERE NOT EXISTS (
                           SELECT 1
                           FROM z_answer_criteria zac                            
                           WHERE id_department = '$id_department'
                           AND id_criteria = '$id_crit'
                       )";
            mysqli_query($con, $query4) or die("Ошибка " . mysqli_error($con));
        }
    }

    if(isset($mainIdListCrit)) {

        $query = "SELECT * FROM accreditation.z_criteria where `name` like '%Укомплектованность%' and id_list_tables_criteria = '$mainIdListCrit' ;";

        $res = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));

        $queryCatch = "select * from z_department zd 
    left join z_list_tables_criteria zltc on zd.id_list_tables_criteria = zltc.id_list_tables_criteria 
where zltc.id_list_tables_criteria not in (5,6,10,47) and zd.id_department = '$insertedId'";
        $resCatch = mysqli_query($con, $queryCatch) or die("Ошибка " . mysqli_error($con));
        if (mysqli_num_rows($resCatch) > 0) {

            while ($row = mysqli_fetch_assoc($res)) {
                $id_criteria_inserted = $row['id_criteria'];
                $query2 = "INSERT INTO z_answer_criteria (id_department, id_criteria, field5) 
                       values ('$mainDep', '$id_criteria_inserted', '$fullName')
                    ";
                $rez2 = mysqli_query($con, $query2) or die("Ошибка " . mysqli_error($con));
            }

        }
    }

    echo '<div class="card-header" id="heading' . $id_department . '" style="justify-content: center; display: block; " onclick="newCollapseTable(this)">
    <div class = "actCont" style="display: flex;">
         <div class="actions-container" style = "width: 80%;">
    <button class="btn btn-link" style="width: 100%;color: black;font-size: 14px;font-weight: 700;" data-toggle="collapse" data-target="#collapse' . $id_department . '" aria-expanded="false" aria-controls="collapse' . $id_department . '" style="text-decoration: none; color: black; font-size: 0.9rem;">
    ' . $department . '
    </button>
     </div>
       ';
    $query = "SELECT id_role FROM users WHERE users.id_user = '{$_COOKIE['id_user']}'";
    $result = mysqli_query($con, $query) or die (mysqli_error($con));
    if (mysqli_num_rows($result) == 1) //если получена одна строка
    {
        $row = mysqli_fetch_assoc($result);
        if ($row['id_role'] == 15) {
        } else {
            echo '
        <div class ="actions-container2"  style = "width: 30%;">
          <button class="btn-rename hiddentab" onclick="renameDepartment(' . $id_department . ')">&#9998;</button>
          <button class="delete-icon" onclick="deleteDepartment(' . $id_department . ')">&times;</button>
        </div>';
        }
    }

    echo '
        </div>
    </div>
    <div class="collapse" id="collapse' . $id_department . '" aria-labelledby="heading' . $id_department . '" data-parent="#accordion">
    <div class="card-body" id="cardBody' . $id_department . '" style="padding: 0px;">
    <table style="border: 1px solid black; width: 100%;">
    <tr>
        <th rowspan="2" style="border: 1px solid black; text-align: center;">
            № п/п
        </th>
        <td style="border: 1px solid black; width: 25%; text-align: center;">
            Наименование критерия
        </td>
        <td style="border: 1px solid black; width: 10%; text-align: left;">
            Сведения по самоаккредитации (да, нет,
не применяется)
        </td>
        <td style="width: 350px; border: 1px solid black;">
            Документы и сведения, на основании которых проведена самоаккредитация
        </td>
        <td style="border: 1px solid black; max-width: 10vw;
  word-wrap: break-word;">
            Примечание
        </td>
        </tr><tbody>';

    $query_criteria = "SELECT zac.id_criteria, zac.field3, zac.field4, zac.field5, zac.field6, zac.field7, zac.defect, zc.pp, zc.`name`
                        FROM z_answer_criteria AS zac
                        JOIN z_criteria AS zc ON zac.id_criteria = zc.id_criteria
                        WHERE zac.id_department = '$id_department'";
    $result_criteria = mysqli_query($con, $query_criteria) or die("Ошибка " . mysqli_error($con));

    while ($row_criteria = mysqli_fetch_assoc($result_criteria)) {
        $id_crit = $row_criteria["id_criteria"];
        $field3 = $row_criteria["field3"];
        $field4 = $row_criteria["field4"];
        if ($field4 !== null) {
            $files = explode(";", $field4);
        } else {
            $files = array();
        }
        echo '<tr>
                <td style="border: 1px solid black; text-align: center;">' . $row_criteria["pp"] . '</td>
                <td style="border: 1px solid black; padding: 0.2rem 0.75rem; text-align: left;">' . $row_criteria["name"] . '</td>
                <td style="border: 1px solid black;"><div style="display: flex; justify-content: center;">
                <select onchange="changeField3(' . $id_crit . ', ' . $id_department . ', this)">
                <option ' . (($field3 === '0' || null) ? 'selected' : '') . 'value="null"></option>
                <option ' . ($field3 === '1' ? 'selected' : '') . ' value="1">Да</option>
                <option ' . ($field3 === '2' ? 'selected' : '') . ' value="2">Нет</option>
                <option ' . ($field3 === '3' ? 'selected' : '') . ' value="3">Не применяется</option>
                </select></div></td>
                <td style="border: 1px solid black;"><div id="' . $id_crit . '_' . $id_department . '" style="width: 350px; ">';
        $count = count($files);
        foreach ($files as $key => $file) {
            if ($key < $count - 1) {
                echo '<div class="file-container">';
                echo '<a target = "_blank" href="/docs/documents/' . $login . '/' . $id_department . '/' . $file . '">' . $file . ' </a>';
                echo '<span class="delete-file" id="delete_' . $id_crit . '_' . $id_department . '_' . $file . '" onclick="z_deleteFile(\'' . $file . '\',' . $id_crit . ',' . $id_department . ')" style="cursor:pointer; padding-left:10px;">×</span>';
                echo '</div>';
            }
        }
        echo '</div><input class  = "inpFiles"  onchange="addFile(' . $id_crit . ', ' . $id_department . ', this)" type="file"/></td>
                <td style="border: 1px solid black; max-width: 10vw;
  word-wrap: break-word;" contenteditable="true" oninput="changeField5(' . $id_crit . ', ' . $id_department . ', this)">' . $row_criteria["field5"] . '</td>
            </tr>';
    }

    echo '</tbody></table></div></div>';
}
else{
    echo "no";
}

?>