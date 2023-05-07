import { expect, test } from "vitest";
import { getCurrentYear } from "../utils";

test("getIconAriaLabel()", () => {
  const expectedYear = new Date().getFullYear();
  expect(getCurrentYear()).toBe(expectedYear);
});
