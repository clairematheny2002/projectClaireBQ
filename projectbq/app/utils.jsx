function kmToMiles(km) {
  return km * 0.621371;
}

function timeToMinutes(hours, minutes, seconds) {
  return hours * 60 + minutes + seconds / 60;
}

function requiredPace(targetMinutes, elapsedMinutes, kmCompleted) {
  const remainingTime = targetMinutes - elapsedMinutes;
  const remainingKm = 42.195 - kmCompleted;

  return remainingTime / remainingKm;
}