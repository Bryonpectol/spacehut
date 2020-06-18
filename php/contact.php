<?php

    if(isset($_POST['firstname'])) {
        $FirstName = $_POST['firstname'];
        $handle = fopen('names.txt', 'a');
        fwrite($handle, $FirstName."\n");
        fwrite($handle, $LastName."\n");
        fclose($handle);
    }

    $LastName = $_POST['lastname'];

    echo $FirstName;
?>