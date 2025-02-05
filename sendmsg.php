<?php
if(!isset($_POST['fio']) and !isset($_POST['email'])){
    ?> <form action="sendmsg.php" method="post">
        <label for="">на НАШУ почту</label>
        <input type="text" name="fio" placeholder="Укажите ФИО" required>
        <input type="text" name="email" placeholder="Укажите e-mail" required>
        <input type="submit" value="Отправить">
    </form><br><br> <?php
} else {
    //показываем форму
    $fio = $_POST['fio'];
    $email = $_POST['email'];
    $fio = htmlspecialchars($fio);
    $email = htmlspecialchars($email);
    $fio = urldecode($fio);
    $email = urldecode($email);
    $fio = trim($fio);
    $email = trim($email);

        $textSubj = "СУПЕРПИСЬМО";
        $subj = iconv("utf-8", "cp1251", $textSubj);
        $text = "Проверка-08";
        $message = iconv("utf-8", "cp1251", $text);
        if (mail("wladislaw109@mail.ru", $subj, $message, "From: support@rnpcmt.by \r\n",'-f support@rnpcmt.by')) {
            echo "Сообщение успешно отправлено";
        } else {
            echo "При отправке сообщения возникли ошибки";
        }

}
?>
