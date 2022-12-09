
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
$title = "Заявка с сайта KETO";
$body = "
<h2>Заявка с сайта KETO-DIET</h2>
<b>Почта:</b> $email<br><br>
";
if(!empty($_POST['age-metric'])){
    $body.='<p><strong>Возраст (лет):</strong>' .$_POST['age-metric'].'</p>';
}
if(!empty($_POST['height-metric'])){
    $body.='<p><strong>Рост (см):</strong>' .$_POST['height-metric'].'</p>';
}
if(!empty($_POST['weight-metric'])){
    $body.='<p><strong>Текущий вес (кг):</strong>' .$_POST['weight-metric'].'</p>';
}
if(!empty($_POST['target-weight-metric'])){
    $body.='<p><strong>Желаемый вес (кг):</strong>' .$_POST['target-weight-metric'].'</p>';
}

if(!empty($_POST['age-imperic'])){
    $body.='<p><strong>Возраст (лет):</strong>' .$_POST['age-imperic'].'</p>';
}
if(!empty($_POST['height-ft'])){
    $body.='<p><strong>Рост (футов):</strong>' .$_POST['height-ft'].'</p>';
}
if(!empty($_POST['height-inch'])){
    $body.='<p><strong>Рост (дюймов):</strong>' .$_POST['height-inch'].'</p>';
}
if(!empty($_POST['weight-imperic'])){
    $body.='<p><strong>Текущий вес (кг):</strong>' .$_POST['weight-imperic'].'</p>';
}
if(!empty($_POST['target-weight-imperic'])){
    $body.='<p><strong>Желаемый вес (кг):</strong>' .$_POST['target-weight-imperic'].'</p>';
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
    $mail->Host       = 'premium244.web-hosting.com'; // SMTP сервера вашей почты
    $mail->Username   = 'info@ketodietplan.one'; // Логин на почте
    $mail->Password   = '@n{@xK@tJ;2p'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('info@ketodietplan.one', 'Keto'); // Адрес самой почты и имя отправителя

    // Получатель письма 
    $mail->addAddress('usov.vladislav@gmail.com');
    $mail->addAddress('9044530@gmail.com');
	$mail->addAddress('kochetkovvowa@gmail.com');
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

header('Location: paypage.html');
exit();