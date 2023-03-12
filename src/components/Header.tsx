import { getNavItems } from "../utils/getNavItems";
import { Icons } from "./Icon";
import { Nav } from "./Nav";
import Title from "./Title";

export type HeaderProps = {
  isDesktop: boolean;
};

function Header({ isDesktop }: HeaderProps) {
  const navItems = getNavItems();
  return (
    <div className="flex">
      <div className="flex basis-1/2">
        <Title />
        <Icons navItems={navItems} />
      </div>
      <div className="basis-1/2">
        <Nav isDesktop={isDesktop} navItems={navItems}></Nav>
      </div>
    </div>
  );
}

export default Header;
