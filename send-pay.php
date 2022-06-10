
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
// $name = $_POST['name'];
$email = $_POST['email'];
// $text = $_POST['text'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заявка с сайта KETO – ТАРИФ";
$body = "
<h2>Заявка с сайта KETO-DIET — ТАРИФ</h2>
<b>Почта:</b> $email<br><br>
";
if(!empty($_POST['firstPayment'])){
    $body.='<p><strong>Выбрал(а) тариф:</strong>' .$_POST['firstPayment'].'</p>';
}
if(!empty($_POST['secondPayment'])){
    $body.='<p><strong>Выбрал(а) тариф:</strong>' .$_POST['secondPayment'].'</p>';
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.adm.tools'; // SMTP сервера вашей почты
    $mail->Username   = 'info@zshop.biz.ua'; // Логин на почте
    $mail->Password   = 'ZshoP147#'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('info@zshop.biz.ua', 'Keto'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('bartsimpson147@gmail.com');
    $mail->addAddress('usov.vladislav@gmail.com');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

header('Location: thanks-page.html');
exit();