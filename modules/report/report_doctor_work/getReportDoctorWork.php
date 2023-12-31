<?php

include "../../../ajax/connection.php";

$id_status = $_GET['id_status'];
$dateAccept = $_GET['dateAccept'];
$dateComplete = $_GET['dateComplete'];

$date = date('d-m-y');

if(empty($dateAccept)){
    $dateAccept = $date;
} /*else {
    $dateAccept = "'$dateAccept'";
}
*/

// echo "\"$date_accept\"";

if(empty($dateComplete)){
    $dateComplete = $date;

} /*else {
    $dateComplete = "'$dateComplete'";
}*/

 


//echo $ur_lica_value;

$query = "select 
us.username, us.id_user, app.id_application, 
CONCAT( app.naim, ' №', app.id_application) as naim, app.date_begin_prov as  date_accept, app.date_end_prov as date_complete, app.date_council, 
CONCAT(c.name, IFNUll(CONCAT(' (', con.conditions,')'),'') ) as name_criteria, c.type_criteria, rc.id_criteria, 
case when (app.id_status =4 or app.id_status=6) and rc.status=1 then rcm.otmetka_all else '' end as crit_src, 
case when app.id_status =4 or app.id_status=6 then ram.otmetka_all else '' end as app_ocenka
from accreditation.rating_criteria rc 
left outer join accreditation.users us on rc.id_otvetstvennogo=us.id_user
left outer join accreditation.criteria c on rc.id_criteria=c.id_criteria
left outer join accreditation.conditions con on c.conditions_id=con.conditions_id
left outer join accreditation.subvision sub on rc.id_subvision=sub.id_subvision
left outer join accreditation.applications app on sub.id_application=app.id_application
left outer join accreditation.report_criteria_mark rcm on rc.id_subvision=rcm.id_subvision and rc.id_criteria = rcm.id_criteria
left outer join accreditation.report_application_mark ram on app.id_application=ram.id_application 

where rc.id_otvetstvennogo is not null and  rc.id_otvetstvennogo<>0
    and app.id_status<>1 
    and (('$id_status' = 0) or ('$id_status'<>0 and app.id_status='$id_status' ))
    and (app.id_status<>1 and (app.date_begin_prov <= '$dateComplete' and app.date_end_prov >= '$dateAccept' ))
   
order by us.username, app.naim, c.type_criteria, name_criteria
";


$rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
$reports = array();


for ($data = []; $row = mysqli_fetch_assoc($rez); $data[] = $row);

class Report{
    public $username, $id_user, $id_application, $naim , $date_accept, $date_complete, $date_council, $name_criteria, $type_criteria, $id_criteria, $crit_src, $app_ocenka;
    
}

foreach ($data as $app) {
    $obj = array();
    $report = new Report();
    $report->username = $app['username'];
    $report->id_user = $app['id_user'];
    $report->id_application = $app['id_application'];
    $report->naim = $app['naim'];
    $report->date_accept = $app['date_accept'];
    $report->date_complete = $app['date_complete'];
    $report->date_council = $app['date_council'];
    $report->name_criteria = $app['name_criteria'];
    $report->type_criteria = $app['type_criteria'];
    $report->id_criteria = $app['id_criteria'];
    $report->crit_src = $app['crit_src'];
    $report->app_ocenka = $app['app_ocenka'];

    array_push($reports,$report);
}

echo json_encode($reports);