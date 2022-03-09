<?php

$eerste_cijfer = readline('eerste cijfer (deeltal)');
$tweede_cijfer = readline('tweede cijfer (deler)');
$totaal = $eerste_cijfer/$tweede_cijfer;
if ($totaal==0) {
    echo ("deling klopt");
}
else {
    echo $totaal;
    echo("\n deling kan niet worden gedaan!");
}

?>
