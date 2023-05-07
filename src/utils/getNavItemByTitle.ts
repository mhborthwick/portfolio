import { NavItem } from "../components";

export function getNavItemByTitle(navItems: NavItem[], title: string) {
  const item = navItems.find((n) => n.title === title);
  if (!item) {
    throw Error("Item not found");
  }
  return item;
}
