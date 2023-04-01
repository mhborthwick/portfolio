import { expect, test } from "vitest";
import getCurrentYear from "../utils/getCurrentYear";

test("getIconAriaLabel()", () => {
  const expectedYear = new Date().getFullYear();
  expect(getCurrentYear()).toBe(expectedYear);
});
