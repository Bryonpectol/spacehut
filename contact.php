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
?>