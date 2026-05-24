export function timeToMinutes(
  hours: number,
  minutes: number,
  seconds: number
): number {
  return (
    hours * 60 +
    minutes +
    seconds / 60
  );
}

export function formatPace(
  decimalMinutes: number
): string {
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
  totalMinutes: number
): string {
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