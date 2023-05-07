import { expect, test } from "vitest";
import { getNavItems } from "../utils";

test("getNavItems()", () => {
  expect(getNavItems()).toEqual([
    {
      title: "About Me",
      url: "#about-me",
    },
    {
      title: "Interests",
      url: "#interests",
    },
    {
      title: "Resume",
      url: "#",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mhborthwick",
    },
    {
      title: "GitHub",
      url: "https://github.com/mhborthwick",
    },
    {
      title: "Mail",
      url: "mailto:mhborthwick%20*at*%20gmail%20-dot-%20com",
    },
  ]);
});
