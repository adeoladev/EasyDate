<?php
function EDate($date,$format,$type) {

    $array = explode(" ", $date);
    $format2 = str_replace( 'y', 'Y', $format );
    $array2 = str_split($format2);
    $d = $array2[0];
    $m = $array2[1];
    $y = $array2[2];
    $num = $array[0];

    if ((is_numeric($num) == false && $date !== 'today') || $format == null || preg_match('/[^dmy]/', $format) || count($array2) > 3) {
        return "Error. Incorrect Format";
    }
    
    if ($date == 'today') {
    $unix = strtotime("now");

    } else if (strpos($date, "day ago") !== false || strpos($date, "days ago") !== false) {
    $unix = strtotime("-$num days");

    } else if (strpos($date, "week ago") !== false || strpos($date, "weeks ago") !== false) {
    $unix = strtotime("-$num weeks");

    } else if (strpos($date, "month ago") !== false || strpos($date, "months ago") !== false) {
    $unix = strtotime("-$num months");

    } else if (strpos($date, "day from now") !== false || strpos($date, "days from now") !== false) {
    $unix = strtotime("+$num days");

    } else if (strpos($date, "week from now") !== false || strpos($date, "weeks from now") !== false) {
    $unix = strtotime("+$num weeks");

    } else if (strpos($date, "month from now") !== false || strpos($date, "months from now") !== false) {
    $unix = strtotime("+$num months");
    }

    $date = date($d."/".$m."/".$y,$unix);
    $dateArray = explode("/",$date);

    if ($type && $type == "long") {
    $months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $monthKey = array_search('m',$array2);
    $dayKey = array_search('d',$array2);
    $yearKey = array_search('Y',$array2);
    $actualMonth = $dateArray[$monthKey];
    $actualDay = $dateArray[$dayKey];
    $actualYear = $dateArray[$yearKey];
    $monthString = $months[$actualMonth-1];
    $longting = [];

    $longting[$monthKey] = $monthString;
    $longting[$dayKey] = $actualDay;
    $longting[$yearKey] = $actualYear;

    return $longting[0]." ".$longting[1]." ".$longting[2];
    }

    return $date;

}