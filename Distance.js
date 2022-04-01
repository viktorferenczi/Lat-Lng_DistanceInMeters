function deg2rad(degrees) {
  let pi = Math.PI;
  return degrees * (pi/180);
}


function getDistanceBetweenTwoCoordinates(fromCoord, toCoord) {
    $earthRadiusInMeter = 6371000;
    
    $dLat = deg2rad(fromCoord.lat - toCoord.lat);
    $dLon = deg2rad(fromCoord.lng - toCoord.lng);
    
    $lat1 = deg2rad(toCoord.lat);
    $lat2 = deg2rad(fromCoord.lat);

    $a = Math.sin($dLat / 2) *  Math.sin($dLat / 2) +  Math.sin($dLon / 2) *  Math.sin($dLon / 2) *  Math.cos($lat1) *  Math.cos($lat2);
    $c = 2 * Math.atan2(Math.sqrt($a), Math.sqrt(1-$a));

    return Math.round($earthRadiusInMeter * $c, 1);
}
