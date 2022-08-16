<?php

//izvelk json uz masivu
$json_record = file_get_contents('APIdata.json');
$decoded_json = json_decode($json_record, true);

//izvada datus uz json


$data[]=$decoded_json;
//parbauda vai json tukss
if(
    (sizeof($data)!=0))
        echo $json_record;



?>