<?php

    if(isset($_GET['firstname'])) {
        $FirstName = $_GET['firstname'];
        $handle = fopen('names.txt', 'a');
        fwrite($handle, $FirstName."\n");
        fwrite($handle, $LastName."\n");
        fclose($handle);
    }

    $LastName = $_GET['lastname'];

    echo $FirstName;
    echo $LastName;
?>

<!-- <form method="POST">
    <input name="firstname" type="text" placeholder="First Name" />
    <br />
    <input name="lastname" type="text" placeholder="Last Name" />
    <br />
    <input name="submit" type="submit" />
  </form> -->