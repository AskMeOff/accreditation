<?php
include "connection.php";
$date = date('Y-m-d H:i:s');
$id_question = $_GET['id_question'];
$answer = $_GET['answer'];

    mysqli_query($con, "update questions set answer = '$answer', date_answer = '$date' where id_question = '$id_question'");

$textSubj = "Ответ от ТП мед.аккредитации";
//$subj = iconv("utf-8","cp1251",$textSubj);
$text = $answer;
$message=iconv("utf-8","cp1251",$text);
$rez = mysqli_query($con, "select email from questions where id_question = '$id_question'");
$row = mysqli_fetch_assoc($rez);
    if (mail($row['email'], $textSubj, "Уважаемый, пользователь. На Ваш вопрос по работе в информационной системе «Медицинская аккредитация» поступил ответ:\n ". $message. "\nПри необходимости дополнительной информации предлагаем обратиться по телефону (тел. Колл-центр и график работы). Рекомендуем ознакомиться с ответами на часто задаваемые вопросы на сайте информационной системы ссылка. Спасибо за Ваше обращение!  Данное сообщение сформировано автоматически и не требует ответа.", "From: medarrc@rnpcmt.by \r\n")) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "При отправке сообщения возникли ошибки";
    }


?>