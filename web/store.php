<?php

/*
//nolasa vertibas "name" no index.html formas
$values=$_GET["name"]; 
if($values=""){
    $values="apple";
}
*/
$values="apple";
if(isset($_POST['SubmitButton'])){
  $values = $_POST['name']; 
}   

//izvelk json uz masivu
$json_record = file_get_contents('APIdata.json');
$decoded_json = json_decode($json_record, true);
//ievieto vērtibas masivā

if(!empty($decoded_json))
    array_push($store, $values);
else(
    $store=$decoded_json;
array_push($store, $values);)
/*
$store=array(
    
    $values,
    4344634,
    52355453,
    45677

);
*/
//ievieto masivu json failā
$json = json_encode($store);
file_put_contents("APIdata.json", $json);

?>