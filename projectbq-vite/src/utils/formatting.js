export function goalTimeToMinutes(
  goalTime
) {
  const hours = goalTime.split(":")[0];
  const minutes = goalTime.split(":")[1];

  return Number(hours) * 60 + Number(minutes);
}

export function timeToMinutes(
  hours,
  minutes,
  seconds
) {
  return (
    hours * 60 +
    minutes +
    seconds / 60
  );
}

export function formatPace(
  decimalMinutes
) {
  const minutes = Math.floor(
    decimalMinutes
  );

  const seconds = Math.round(
    (decimalMinutes - minutes) * 60
  );

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export function formatTime(
  totalMinutes
) {
  const hours = Math.floor(
    totalMinutes / 60
  );

  const minutes = Math.floor(
    totalMinutes % 60
  );

  const seconds = Math.round(
    (totalMinutes -
      Math.floor(totalMinutes)) *
      60
  );

  return `${hours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}