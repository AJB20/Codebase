<?php

$eerste_cijfer = readline('eerste cijfer (deeltal)');
$tweede_cijfer = readline('tweede cijfer (deler)');
$totaal = $eerste_cijfer/$tweede_cijfer;
echo ($totaal);

if ($totaal==0) {
    echo ("deling klopt");
}
else {
    echo("deling kan niet worden gedaan!");
}

?>
