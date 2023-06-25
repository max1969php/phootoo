<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_GET['Url'])){
  $Url=$_GET['Url'];
}else{
  exit('failed');
}

$pdo = new PDO('mysql:host=localhost;dbname=phootoo;charset=utf8','phootoo_user','phootoo_user_psw',); [
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
];
    
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


 
try{
$sql="UPDATE documents SET views=views+1 WHERE Url=:Url
";
$stmt = $pdo->prepare($sql); 
$stmt->execute(array( 
  ':Url'         => $Url,
  )
);
} catch (PDOException $e) {
  $title="errore";
  $output="Database error:" . $e->getMessage() . 
  ' in ' . $e->getFile() . ' : ' . $e->getLine();
  echo $title.'<br>';
  echo $output;
}
?>