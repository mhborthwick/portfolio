import { expect, test } from "vitest";
import { getIconAriaLabel } from "../utils";

test("getIconAriaLabel()", () => {
  expect(getIconAriaLabel("test")).toBe("test-icon");
});
