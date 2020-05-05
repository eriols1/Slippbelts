<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <title></title>
  </head>
  <body>
    <?php

$bilar=array(

array("rubrik"=>"saab 9-3 turbo cab","bild"=>"saab.jpg","pris"=>"100","beskrivning"=>"inte hel om hålen"),
array("rubrik"=>" turbo cab","bild"=>"saab.jpg","pris"=>"2200","beskrivning"=>"om hålen"),
array("rubrik"=>"saab 9-3","bild"=>"saab.jpg","pris"=>"3200","beskrivning"=>"inte hel")
);

require('dbconnect.php');
$dbconn=new dbconnect();
$stmt=$dbconn->pdo->query('select * from bilar');
$stmt->execute();

$bilar=$stmt->fetchAll();

print_r($bilar);

foreach ($bilar as $bil) {

  echo<<<ARTIKEL
  <div ><fieldset>
  <legend>{$bil['rubrik']} </legend>
  img


  ARTIKEL;
}

     ?>

  </body>
</html>
