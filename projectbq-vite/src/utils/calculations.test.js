import { describe, test, expect } from "vitest";
import {
  calculateRequiredPaceKm,
  calculateProjectedFinishMinutes,
} from "./calculations";

describe("Real Marathon Scenarios", () => {
  test("runner exactly on 3:25 pace", () => {
    const elapsedMinutes = 102.5;

    const result = calculateRequiredPaceKm(
      205,
      elapsedMinutes,
      21.1
    );

    expect(result).toBeCloseTo(4.86, 1);
  });

  test("runner ahead of pace", () => {
    const elapsedMinutes = 100;

    const result = calculateRequiredPaceKm(
      205,
      elapsedMinutes,
      21.1
    );

    // ahead of schedule means you can run slower from here
    expect(result).toBeGreaterThan(4.86);
  });

  test("runner behind pace", () => {
    const elapsedMinutes = 105;

    const result = calculateRequiredPaceKm(
      205,
      elapsedMinutes,
      21.1
    );

    // behind schedule means you need to run faster from here
    expect(result).toBeLessThan(4.86);
  });

  test("runner finishes race", () => {
    const result = calculateRequiredPaceKm(
      205,
      204,
      42.195
    );

    expect(result).toBe(0);
  });

  test("projected finish for even pacing", () => {
    const elapsedMinutes = 100;

    const result = calculateProjectedFinishMinutes(
      elapsedMinutes,
      20
    );

    expect(result).toBeCloseTo(210.975, 1);
  });

  test("fast early pace projects fast finish", () => {
    const result = calculateProjectedFinishMinutes(
      90,
      20
    );

    expect(result).toBeLessThan(205);
  });

  test("slow early pace projects missed BQ", () => {
    const result = calculateProjectedFinishMinutes(
      110,
      20
    );

    expect(result).toBeGreaterThan(205);
  });

  test("blank inputs do not crash", () => {
    const result = calculateRequiredPaceKm(
      205,
      NaN,
      NaN
    );

    expect(result).toBe(0);
  });
});