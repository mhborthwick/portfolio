import { expect, test } from "vitest";
import { NavItem } from "../components/Nav";
import { getNavItemByTitle } from "../utils/getNavItemByTitle";

test("getNavItemByTitle()", () => {
  const mockNavItems: NavItem[] = [
    {
      title: "foo",
      url: "bar",
    },
  ];
  expect(getNavItemByTitle(mockNavItems, "foo")).toEqual({
    title: "foo",
    url: "bar",
  });
  expect(() => getNavItemByTitle(mockNavItems, "nope")).toThrowError(
    "Item not found"
  );
});
