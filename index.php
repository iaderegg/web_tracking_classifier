<?php

$component = $_POST['component'];
$text = $_POST['text'];

switch($component){
    case 'familiar':
        echo($text);
        break;
    case 'economic':
        echo($text);
        break;
    case 'individual':
        echo($text);
        break;
    case 'academic':
        echo($text);
        break;
    case 'universitarylife':
        echo($text);
        break;
}