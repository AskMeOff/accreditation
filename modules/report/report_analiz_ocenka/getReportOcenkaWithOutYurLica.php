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
//--st.name_status, app.date_send, sto.type_name as type_org,
$query = "
SELECT c.type_criteria,
CONCAT(c.name, IFNUll(CONCAT(' (', con.conditions,')'),'') ) as name_criteria, 
count(rc.id_criteria) as crit_count, Round(SUM(rcm.otmetka_accred_all)/count(rc.id_criteria)) as crit_src
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
where rc.id_rating_criteria is not null 
    and (('$id_type_org' = 0) or ('$id_type_org'<>0 and uz.id_type='$id_type_org' ))
    and (('$id_oblast' = 0) or ('$id_oblast'<>0 and uz.oblast='$id_oblast' ))
    and (('$id_status' = 0) or ('$id_status'<>0 and app.id_status='$id_status' ))
    and ((('$id_status' <> 1) and ((app.date_send is null) or (app.date_send is not null and (app.date_send >= '$dateAccept' and app.date_send <= '$dateComplete'))))
    or (('$id_status' = 1) ))
    and (('$criteriaAll' = 0) or ('$criteriaAll'=1 and $id_scriteria_str3 )  )
group by  c.type_criteria,name_criteria 
order by  c.type_criteria,name_criteria 
";
//--st.name_status, app.date_send, type_org,
// ('$id_scriteria_str'='' or ('$id_scriteria_str'<>'' and 

$rez = mysqli_query($con, $query) or die("Ошибка " . mysqli_error($con));
$reports = array();

//  echo $con;

//echo json_encode($query);

for ($data = []; $row = mysqli_fetch_assoc($rez); $data[] = $row);

class Report{
    public /*$status , $date_send, $type_org_name,*/ $type_criteria, $name_criteria, $crit_count, $crit_src;
}

foreach ($data as $app) {
    $obj = array();
    $report = new Report();
   // $report->status = $app['name_status'];
   // $report->date_send = $app['date_send'];
   // $report->type_org_name = $app['type_org'];
    $report->type_criteria = $app['type_criteria'];
    $report->name_criteria = $app['name_criteria'];
    $report->crit_count = $app['crit_count'];
    $report->crit_src = $app['crit_src'];


    array_push($reports,$report);
}
//echo $reports;

echo json_encode($reports);