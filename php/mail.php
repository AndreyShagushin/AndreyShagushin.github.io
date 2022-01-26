<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/phpmailer/Exception.php";
require __DIR__ . "/phpmailer/PHPMailer.php";
require __DIR__ . "/phpmailer/SMTP.php";


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['messages'];




//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = "ssl://smtp.mail.ru";                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = "ashagushin@mail.ru";                     //SMTP username
    $mail->Password   = "b1sMer8vHtL6ZczK9qBA";//'upzstyaobnfvpyjc';   //mxxtaxjyslkntzxc                            //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->SMTPDebug = 2;

    //Recipients
    $mail->setFrom("ashagushin@mail.ru", "С сайта http://ashagupd.beget.tech");
    $mail->addAddress('ashagushin@mail.ru', 'Andrey');     //Add a recipient
    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Письмо с сайта http://ashagupd.beget.tech';
    $mail->Body    = '' .$name . ' оставил письмо! <br>Текст письма:<br> ' . $message. "<br> E-mail для связи: " .$email ;
    
    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>