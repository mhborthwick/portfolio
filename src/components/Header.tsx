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
    <div className="flex h-[40px] m-8">
      <div className="flex basis-1/2 items-center">
        <Title />
        <Icons navItems={navItems} />
      </div>
      <div className="basis-1/2 flex flex-row-reverse items-center">
        <Nav isDesktop={isDesktop} navItems={navItems}></Nav>
      </div>
    </div>
  );
}

export default Header;
