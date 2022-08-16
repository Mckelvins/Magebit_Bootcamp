<!DOCTYPE html>

<?php

/*
//nolasa vertibas "name" no index.html formas
$values=$_GET["name"]; 
if($values=""){
    $values="apple";
}
*/
$store=array();
$values="apple";
if(isset($_POST['SubmitButton'])){
  $values = $_POST['name']; 
}   

//iegust datus no json
$json_record = file_get_contents('APIdata.json');
$decoded_json = json_decode($json_record, true);
$data[]=$decoded_json;

//parbauda vai json tukss
if(
    (sizeof($data)==0)){

    $store=array_push($store, $values);
    }
    //ja json ir >1 ieraksts
else{ 
    
    //$store=array_merge($store,$decoded_json);
   // $store=array_push($store, $values);
}

//ievieto masivu json failā
$json = json_encode($store);
file_put_contents("APIdata.json", $json);

?>



<html>
<head>
<title>Lesson_11</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="style.css?version=1" />
</head>
<body >
    
<div class="wrapper">
    <div class="container">
        <div class="add">
            
           <form action="#" method="post" id="addinput" >
                <input name="name" type="text" class="add__input" id="addin" placeholder="Add Some Task...">
                
               
                <input type="submit" name="SubmitButton" value="Add">
            
            </form>
            
            
        </div>
        <div id="tasks">


        </div>
        
        <div id="test">dfhhfghg

        </div>
        <div id="divid"> A div element</div>
    </div>
</div>



<script src="do.js"></script>



</body>
</html>