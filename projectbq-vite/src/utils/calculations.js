import {
  MARATHON_KM,
} from "./constants";

export function calculateRequiredPaceKm(
  targetMinutes,
  elapsedMinutes,
  kmCompleted
) {

    if (isNaN(targetMinutes) || isNaN(elapsedMinutes) || isNaN(kmCompleted)) {
        return 0;
    }

    const kmCompletedNumber =
        Number(kmCompleted)

    const remainingTime =
        targetMinutes - elapsedMinutes;

    const remainingKm =
        MARATHON_KM - kmCompletedNumber;

    if (remainingKm <= 0) {
        return 0;
    }

    return remainingTime / remainingKm;
}

export function calculateProjectedFinishMinutes(
  elapsedMinutes,
  kmCompleted
) {
  const kmCompletedNumber =
    Number(kmCompleted);

  if (kmCompletedNumber <= 0) {
    return 0;
  }

  const currentPace =
    elapsedMinutes / kmCompletedNumber;

  return currentPace * MARATHON_KM;
}