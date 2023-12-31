<?php

include "../../../ajax/connection.php";

$id_oblast = $_GET['id_oblast'];
$id_status = $_GET['id_status'];
$dateAccept = $_GET['dateAccept'];
$dateComplete = $_GET['dateComplete'];
$id_type_org = $_GET['id_type_org'];
$criteriaAll = $_GET['criteriaAll'];
$id_scriteria_str = $_GET['id_scriteria_str'];

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

 

$id_scriteria_str2 = explode(',', $id_scriteria_str);
$id_scriteria_str3 = '';

foreach($id_scriteria_str2 as $str){
    $id_scriteria_str3 .= '(' . 'rc.id_criteria' . '=' . $str . ') or';
    //echo $str . "<br />";
}

if($id_scriteria_str === ''){
    $id_scriteria_str3 = '0 = 0';
} else {
$id_scriteria_str3 = substr($id_scriteria_str3,0,-2);
$id_scriteria_str3 = '(' . $id_scriteria_str3 . ')';
}

//echo $ur_lica_value;

$query = "SELECT st.name_status, app.date_send, sto.type_name as type_org, 
CONCAT( app.naim, ' №', app.id_application) as naim, app.id_application, 
CONCAT(c.name, IFNUll(CONCAT(' (', con.conditions,')'),'') ) as name_criteria, c.type_criteria,
count(rc.id_criteria) as crit_count, Round(SUM(rcm.otmetka_accred_all)/count(rc.id_criteria)) as crit_src, ram.otmetka_accred_all as app_ocenka
from applications app
left outer join users u on app.id_user=u.id_user
left outer join uz uz on uz.id_uz=u.id_uz
left outer join status st on app.id_status=st.id_status
left outer join subvision s on app.id_application=s.id_application
left outer join rating_criteria rc on s.id_subvision=rc.id_subvision
left outer join criteria c on rc.id_criteria=c.id_criteria
left outer join conditions con on c.conditions_id=con.conditions_id
left outer join spr_type_organization sto on uz.id_type=sto.id_type
left outer join report_criteria_mark rcm on s.id_subvision=rcm.id_subvision and rc.id_criteria = rcm.id_criteria
left outer join report_application_mark ram on app.id_application=ram.id_application 
where rc.id_rating_criteria is not null 
    and (('$id_type_org' = 0) or ('$id_type_org'<>0 and uz.id_type='$id_type_org' ))
    and (('$id_oblast' = 0) or ('$id_oblast'<>0 and uz.oblast='$id_oblast' ))
    and (('$id_status' = 0) or ('$id_status'<>0 and app.id_status='$id_status' ))
    and ((('$id_status' <> 1) and ((app.date_send is null) or (app.date_send is not null and (app.date_send >= '$dateAccept' and app.date_send <= '$dateComplete'))))
    or (('$id_status' = 1) ))
    and (('$criteriaAll' = 0) or ('$criteriaAll'=1 and $id_scriteria_str3 )  )
group by st.name_status, app.date_send, type_org, naim, app.id_application, c.type_criteria,name_criteria, app_ocenka 
order by st.name_status, app.date_send, type_org, naim, app.id_application, c.type_criteria,name_criteria, app_ocenka 
";

// ('$id_scriteria_str'='' or ('$id_scriteria_str'<>'' and 

$rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
$reports = array();

//  echo $con;

//echo json_encode($query);

for ($data = []; $row = mysqli_fetch_assoc($rez); $data[] = $row);

class Report{
    public $id_application, $status , $date_send, $type_org_name, $naim, $name_criteria, $crit_count, $type_criteria, $crit_src, $app_ocenka;
    
}

foreach ($data as $app) {
    $obj = array();
    $report = new Report();
    $report->id_application = $app['id_application'];
    $report->status = $app['name_status'];
    $report->date_send = $app['date_send'];
    $report->type_org_name = $app['type_org'];
    $report->naim = $app['naim'];
    $report->name_criteria = $app['name_criteria'];
    $report->crit_count = $app['crit_count'];
    $report->type_criteria = $app['type_criteria'];
    $report->crit_src = $app['crit_src'];
    $report->app_ocenka = $app['app_ocenka'];

    array_push($reports,$report);
}
//echo $reports;

echo json_encode($reports);