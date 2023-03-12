import { expect, test } from "vitest";
import { getNavItems } from "../utils/getNavItems";

test("getNavItems()", () => {
  expect(getNavItems()).toEqual([
    {
      title: "About Me",
      url: "#",
    },
    {
      title: "Interests",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
    {
      title: "LinkedIn",
      url: "#",
    },
    {
      title: "GitHub",
      url: "#",
    },
    {
      title: "Mail",
      url: "#",
    },
  ]);
});
