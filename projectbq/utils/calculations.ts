// utils/calculations.ts

export function calculateRequiredPaceKm(
  targetMinutes: number,
  elapsedMinutes: number,
  kmCompleted: number
): number {
  const remainingTime =
    targetMinutes - elapsedMinutes;

  const remainingKm =
    42.195 - kmCompleted;

  if (remainingKm <= 0) {
    return 0;
  }

  return remainingTime / remainingKm;
}

export function calculateProjectedFinishMinutes(
  elapsedMinutes: number,
  kmCompleted: number
): number {
  if (kmCompleted <= 0) {
    return 0;
  }

  const currentPace =
    elapsedMinutes / kmCompleted;

  return currentPace * 42.195;
}