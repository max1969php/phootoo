<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_GET['email'])){
  $user_email=$_GET['email'];
}else{
  exit('failed');
}

$pdo = new PDO('mysql:host=localhost;dbname=phootoo;charset=utf8','phootoo_user','phootoo_user_psw',); [
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
];
    
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


 
try{
$sql="SELECT documents.*,user.nickName
FROM documents
JOIN user ON user.id=documents.ownerId
WHERE user.email=:user_email
ORDER BY documents.createdAt ASC
";
$stmt = $pdo->prepare($sql); 
$stmt->execute(array( 
  ':user_email'         => $user_email,
  )
);
$clienti = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC)); 
exit($clienti);
//print_r($clienti);
} catch (PDOException $e) {
  $title="errore";
  $output="Database error:" . $e->getMessage() . 
  ' in ' . $e->getFile() . ' : ' . $e->getLine();
  echo $title.'<br>';
  echo $output;
}
?>