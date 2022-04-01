// The first coordinate is $this->lat and $this->lng (You may change that in line 6-7), and the second coord is the parameter.

public function distance(Coord $coord): float {
  $earthRadiusInMeter = 6371000;

  $dLat = deg2rad($coord->lat - $this->lat);
  $dLon = deg2rad($coord->lng - $this->lng);

  $lat1 = deg2rad($this->lat);
  $lat2 = deg2rad($coord->lat);

  $a = sin($dLat / 2) * sin($dLat / 2) + sin($dLon / 2) * sin($dLon / 2) * cos($lat1) * cos($lat2);
  $c = 2 * atan2(sqrt($a), sqrt(1-$a));

  return round($earthRadiusInMeter * $c, 1);
}
