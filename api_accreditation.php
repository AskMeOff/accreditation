<style>
    .rolledUp {
        width: 25px;
        transition: 2s linear;
    }

    .rightCardFS {
        width: 100%;
        transition: 2s linear;
    }

    .rightCard65 {
        width: 100%;
        transition: 2s linear;
    }

    .hiddentab {
        display: none;
    }

    .margleft {
        padding-left: 20px;
    }

    .inform {
        height: 23%;
        position: relative;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.3125rem;
        padding: 2.5rem 2.5rem;
    }

    .sovet {
        height: 60%;
        position: relative;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.3125rem;
        padding: 2.5rem 2.5rem;
    }

    #checkboxInput {
        transform: scale(1.2);
        font-weight: bold;
    }

    #formDateDorabotka {
        margin-left: 35px;
    }

    #formFileReportDorabotka {
        margin-left: 35px;
    }

    .history {
        display: flex;
        justify-content: center;
    }
</style>

<style>

    .container {
        padding: 0rem 0rem;
    }

    .leftSide {
        margin-left: 0;
        margin-right: 0;
    }

    h4 {
        margin: 2rem 0rem 1rem;
    }

    .table-image {

    td, th {
        vertical-align: middle;
    }

    }


    .modalHistoryCl {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1050;
        display: none;
        width: 38%;
        height: 100%;
        overflow: hidden;
        outline: 0;
    }

    .modalHistoryCl-body {
        max-height: 480px;
        width: 640px;
        overflow-y: auto;
    }

    .showcl {
        display: block;
    }

    .hiddentabcl {
        display: none;
    }


    .btn-dangers.btn-closes {
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: #dc3545; /* красный цвет */
        padding-right: 0;
        padding-left: 0;
    }

    .btn-dangers.btn-closes:hover {
        color: #b02a37; /* тёмно-красный цвет */
        background-color: transparent;
        border: none;
    }

    .btn-dangers {
        color: red;
    }

    .zvezda {
        color: red;
    }

</style>

<?php if (isset($_COOKIE['login'])) { ?>
    <div class="content-wrapper">
        <div class="row" id="proBanner">
            <div class="col-12">
                <!--    -->
            </div>
        </div>
        <div class="d-xl-flex justify-content-between align-items-start">
            <h2 class="text-dark font-weight-bold mb-2"> Заявления </h2>
            <div class="d-sm-flex justify-content-xl-between align-items-center mb-2">
                <?php
                $login = $_COOKIE['login']; ?>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="d-sm-flex justify-content-between align-items-center transaparent-tab-border ">
                    <ul class="nav nav-tabs tab-transparent" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#allApps" role="tab"
                               aria-selected="true">Новые</a>
                        </li>
                        <li class="nav-item">

                            <a class="nav-link " id="rassmotrenie-tab" data-toggle="tab" href="#rassmotrenie" role="tab"
                               aria-selected="false">На рассмотрении</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="odobrennie-tab" data-toggle="tab" href="#" role="tab"
                               aria-selected="false">Завершена оценка</a>
                        </li>
                        <li class="nav-item hiddentab" >
                            <a class="nav-link" id="neodobrennie-tab" data-toggle="tab" href="#" role="tab"
                               aria-selected="false">На доработке</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="reshenieSoveta-tab" data-toggle="tab" href="#" role="tab"
                               aria-selected="false">Решение</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="accredArchiveNew-tab" data-toggle="tab" href="#" role="tab"
                               aria-selected="false">Архив</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="accredArchive-tab" data-toggle="tab" href="#" role="tab"
                               aria-selected="false">Архив 2023</a>
                        </li>

                    </ul>
                    <div class="d-md-block d-none">
                        <!--                        <a href="#" class="text-light p-1"><i class="mdi mdi-view-dashboard"></i></a>-->
                        <!--                        <a href="#" class="text-light p-1"><i class="mdi mdi-dots-vertical"></i></a>-->
                    </div>
                </div>
                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade show active" id="allApps" role="tabpanel" aria-labelledby="home-tab">

                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 2 and uz.oblast = '$role'";
                                        } else {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 2";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;
                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th>Заявления</th>
                                                <th>Дата отправки</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php"
                                                /*                                                <tr onclick="showModal('<?= $app['app_id'] ?>', '<?= $str_CalcSelfMark ?>', '<?= $str_CalcSelfMarkAccred ?>')" style="cursor: pointer;">*/
                                                ?>

                                                <tr onclick="newShowModal('<?= $app['app_id'] ?>')"
                                                    style="cursor: pointer;">

                                                    <td >
                                                        Заявление <?= $app['username'] ?>  <?= $app['id_rkk'] == "0" ? "№" . $app['app_id'] : "" ?></td>
                                                    <td><?= $app['date_send'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade" id="rassmotrenie" role="tabpanel" aria-labelledby="rassmotrenie-tab">
                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        //                                        $login = $_COOKIE['login'];
                                        //                                        $insertquery = "SELECT * FROM users WHERE login='$login'";
                                        //
                                        //                                        $rez = mysqli_query($con, $insertquery) or die("Ошибка " . mysqli_error($con));
                                        //                                        $username = "";
                                        //                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        //                                        {
                                        //                                            $row = mysqli_fetch_assoc($rez);
                                        //                                            $id = $row['id_user'];
                                        //                                            $username = $row['username'];
                                        //                                        }
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id, rkk.date_reg
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                    left outer join rkk on rkk.id_application=a.id_application  
                                                   where id_status = 3 and u.oblast = '$role'";
                                        } else {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id, rkk.date_reg
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                    left outer join rkk on rkk.id_application=a.id_application   
                                                    where id_status = 3";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;
                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th >Заявления</th>
                                                <th>Дата регистрации</th>
                                                <th>Дата комиссии</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php";
                                                ?>

                                                <tr <?= $app['checkboxValueGuzo'] == "1" ? "style='font-weight:900;'" : ""?> onclick="newShowModal('<?= $app['app_id'] ?>')"
                                                    style="cursor: pointer;">


                                                    <td>Заявление <?= $app['username'] ?> №<?= $app['app_id'] ?></td>
                                                    <td><?= $app['date_reg'] ?></td>
                                                    <td><?= $app['date_council'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade" id="odobrennie" role="tabpanel" aria-labelledby="odobrennie-tab">
                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id, r.date_protokol
                                                    FROM applications a
                                                    left join rkk r on r.id_application = a.id_application
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 4 and u.oblast = '$role'";
                                        } else {

                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id, r.date_protokol
                                                    FROM applications a
                                                        left join rkk r on r.id_application = a.id_application
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user where id_status = 4";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;
                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th >Заявления</th>
                                                <th>Дата одобрения</th>
                                                <th>Дата комиссии</th>
                                                <th>Дата протокола из РКК</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php";
                                                ?>

                                                <tr <?= $app['checkboxValueGuzo'] == "1" ? "style='font-weight:900;'" : ""?> onclick="newShowModal('<?= $app['app_id'] ?>')"
                                                    style="cursor: pointer;">


                                                    <td>Заявление <?= $app['username'] ?> №<?= $app['app_id'] ?></td>
                                                    <td><?= $app['date_complete'] ?></td>
                                                    <td><?= $app['date_council'] ?></td>
                                                    <td><?= $app['date_protokol'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade" id="neodobrennie" role="tabpanel" aria-labelledby="neodobrennie-tab">
                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 5 and u.oblast = '$role'";
                                        } else {

                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user where id_status = 5";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;
                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th>Заявления</th>
                                                <th>Дата доработки</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php";
                                                ?>

                                                <tr onclick="newShowModal('<?= $app['app_id'] ?>')"
                                                    style="cursor: pointer;">


                                                    <td>Заявление <?= $app['username'] ?> №<?= $app['app_id'] ?></td>
                                                    <td><?= $app['dateInputDorabotki'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade" id="reshenieSoveta" role="tabpanel" aria-labelledby="reshenieSoveta-tab">
                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id , date_protokol, r.date_delo as datdel
                                                    FROM applications a 
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                     left outer join rkk r on r.id_application = a.id_application
                                                   where id_status = 6 and u.oblast = '$role'";
                                        } else {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id , date_protokol, r.date_delo as datdel
                                                    FROM applications a 
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                     left outer join rkk r on r.id_application = a.id_application
                                                   where id_status = 6";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;

                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th>Заявления</th>
                                                <th>Дата протокола</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php";
                                                $date_delo = $app['datdel'];
                                                if($date_delo != "")
                                                    $style = 'color: red;' ;
                                                else $style = "";
                                                ?>
                                                <tr onclick="newShowModal('<?= $app['app_id'] ?>')"
                                                    style="cursor: pointer; <?= $style?>">

                                                    <td>Заявление <?= $app['username'] ?> №<?= $app['app_id'] ?></td>

                                                    <td><?= $app['date_protokol'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade" id="accredArchiveNew" role="tabpanel" aria-labelledby="accredArchiveNew-tab">
                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 9 and u.oblast = '$role'";
                                        } else {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 9";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;
                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th >Заявления</th>
                                                <th>Дата решения совета</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php"
                                                ?>

                                                <tr <?= $app['checkboxValueGuzo'] == "1" ? "style='font-weight: 900;'" : ""?> onclick="newShowModal('<?= $app['app_id'] ?>')"
                                                    style="cursor: pointer;">

                                                    <td>Заявление <?= $app['username'] ?> №<?= $app['app_id'] ?></td>
                                                    <td><?= $app['date_council'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>





                <div class="tab-content tab-transparent-content">
                    <div class="tab-pane fade" id="accredArchive" role="tabpanel" aria-labelledby="accredArchive-tab">
                        <div class="row">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">

                                        <?php
                                        $query = "SELECT * FROM users where login = '$login'";

                                        $rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
                                        if (mysqli_num_rows($rez) == 1) //если нашлась одна строка, значит такой юзер существует в базе данных
                                        {
                                            $row = mysqli_fetch_assoc($rez);
                                            $role = $row['id_role'];
                                        }
                                        if ($role > 3 && $role < 12) {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 8 and u.oblast = '$role'";
                                        } else {
                                            $query = "SELECT a.*, uz.username, uz.oblast, ram.*, a.id_application as app_id
                                                    FROM applications a
                                                   left outer join report_application_mark ram on a.id_application=ram.id_application
                                                    left outer join uz uz on uz.id_uz=a.id_user
                                                   where id_status = 8";
                                        }
                                        $result = mysqli_query($con, $query) or die (mysqli_error($con));
                                        for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;
                                        ?>

                                        <table id="example" class="table table-striped table-bordered"
                                               style="width:100%">
                                            <thead>
                                            <tr>
                                                <th>Заявления</th>
                                                <th>Дата решения совета</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <?php

                                            foreach ($data as $app) {
                                                include "ajax/mainMark.php"
                                                ?>

                                                <tr onclick="showModal('<?= $app['app_id'] ?>', '<?= $str_CalcSelfMark ?>', '<?= $str_CalcSelfMarkAccred ?>')"
                                                    style="cursor: pointer;">

                                                    <td>Заявление <?= $app['username'] ?> №<?= $app['app_id'] ?></td>
                                                    <td><?= $app['date_council'] ?></td>


                                                </tr>
                                                <?php
                                            }
                                            ?>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
 <?php include "modules/modals.php"; ?>
    <!-- content-wrapper ends -->
    <!-- partial:partials/_footer.html -->


    <!-- RKK -->


    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>

    <!--<script>--><?php //include 'getApplication.php' ?><!--</script>-->
    <!--<script>console.log(filesName)</script>-->
    <script src="dist/js/formAccreditation.js"></script>
    <script src="dist/js/newFormAccreditation.js"></script>

<?php } else { ?>
    <div class="content-wrapper">
        <div class="row" id="proBanner">
            <div class="col-12">
                <!--    -->
            </div>
        </div>
        <div class="d-xl-flex justify-content-between align-items-start">
            <h2 class="text-dark font-weight-bold mb-2"> Требуется авторизация </h2>
        </div>
    </div>

<?php } ?>