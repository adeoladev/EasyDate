<?php
function EDate($date,$format) {

    $array = explode(" ", $date);
    $format2 = str_replace( 'y', 'Y', $format );
    $array2 = str_split($format2);
    $d = $array2[0];
    $m = $array2[1];
    $y = $array2[2];
    $num = $array[0];
    $seconds = "Error. Incorrect Format";

    if (is_numeric($num) == false || $format == null || (preg_match('/[^dmy]/', $format) && $format !== "unix" && $format !== "seconds")
    || (count($array2) > 3 && $format !== "unix" && $format !== "seconds")) {
        return "Error. Incorrect Format";
    }
    
    if (strpos($date, "day ago") !== false || strpos($date, "days ago") !== false) {
    $unix = strtotime("-$num days");

    } else if (strpos($date, "week ago") !== false || strpos($date, "weeks ago") !== false) {
    $unix = strtotime("-$num weeks");

    } else if (strpos($date, "month ago") !== false || strpos($date, "months ago") !== false) {
    $unix = strtotime("-$num months");

    } else if (strpos($date, "day from now") !== false || strpos($date, "days from now") !== false) {
    $unix = strtotime("+$num days");
    $seconds = $num * 86400;

    } else if (strpos($date, "week from now") !== false || strpos($date, "weeks from now") !== false) {
    $unix = strtotime("+$num weeks");
    $seconds = $num * 604800;

    } else if (strpos($date, "month from now") !== false || strpos($date, "months from now") !== false) {
    $unix = strtotime("+$num months");
    $seconds = $num * 18144000;
    }

    if ($format == "unix") {
    return $unix;
    } else if ($format == "seconds") {
    return $seconds;
    } else {
    return date($d."/".$m."/".$y,$unix);
    }

}