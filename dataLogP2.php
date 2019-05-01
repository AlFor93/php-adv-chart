<?php

  include "dataBaseP2.php";

    $myarr = [];
    foreach ($graphs as $value) {

      $myarr[] = $value;

    }

  echo json_encode($myarr);


?>
