import {
  formatPace,
  formatTime,
} from "./formatting";

import {
  describe,
  test,
  expect,
} from "vitest";

describe("formatPace", () => {
  test("formats pace correctly", () => {
    expect(
      formatPace(4.75)
    ).toBe("4:45");
  });
});

describe("formatTime", () => {
  test("formats total minutes", () => {
    expect(
      formatTime(205)
    ).toBe("3:25:00");
  });
});