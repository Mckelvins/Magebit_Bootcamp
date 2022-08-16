<?php

$values=$_GET["name"]; 

$store=array(
    
    $values,
    $values,
    $values,
    4344634,
    52355453,
    45677

 
);

$json = json_encode($store);





file_put_contents("APIdata.json", $json);



$json_record = file_get_contents('APIdata.json');



$decoded_json = json_decode($json_record, true);

echo $json_record;




?>