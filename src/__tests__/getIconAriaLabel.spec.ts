import { expect, test } from "vitest";
import getIconAriaLabel from "../utils/getIconAriaLabel";

test("getIconAriaLabel()", () => {
  expect(getIconAriaLabel("test")).toBe("test-icon");
});
