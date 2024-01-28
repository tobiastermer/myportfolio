<?php

########### CONFIG ###############

$recipient = 'mail@tobias-termer.de'; # Bitte hier deine E-Mail angeben
$redirect = 'success.html';

########### CONFIG END ###########



########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [formEmail] Email of the sender
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        // Bereinigen und Validieren der Eingaben
        $name = filter_var($_POST['name'] ?? 'Unbekannter Absender', FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'] ?? 'Keine Email angegeben', FILTER_VALIDATE_EMAIL);
        $message = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);

        // Überprüfen der Email-Adresse
        if (!$email) {
            die("Ungültige E-Mail-Adresse.");
        }

        // Entfernen von Zeilenumbrüchen aus dem Namen und der E-Mail
        $name = str_replace(array("\r", "\n"), '', $name);
        $email = str_replace(array("\r", "\n"), '', $email);

        $subject = "Contact From " . $name;
        $headers = "From: contact@portfolio.tobias-termer.de";

        // Zusammenstellen der Nachricht
        $fullMessage = "Name: " . $name . "\n";
        $fullMessage .= "Email: " . $email . "\n";
        $fullMessage .= "Nachricht:\n" . $message;

        mail($recipient, $subject, $fullMessage, $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}