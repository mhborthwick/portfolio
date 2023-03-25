import { Menu } from "@headlessui/react";
import { getNavItemByTitle } from "../utils/getNavItemByTitle";

export type NavItem = {
  title: string;
  url: string;
};

export type NavProps = {
  isDesktop: boolean;
  navItems: NavItem[];
};

export function Nav({ isDesktop, navItems }: NavProps) {
  const aboutMe = getNavItemByTitle(navItems, "About Me");
  const interests = getNavItemByTitle(navItems, "Interests");
  const contact = getNavItemByTitle(navItems, "Contact");
  const showDesktopNav = {
    display: isDesktop ? "flex" : "none",
  };
  if (isDesktop) {
    return (
      // desktop menu
      <nav className="" style={showDesktopNav}>
        <ul className="flex">
          <NavItem title={aboutMe.title} url={aboutMe.url} />
          <NavItem title={interests.title} url={interests.url} />
          <NavItem title={contact.title} url={contact.url} />
        </ul>
      </nav>
    );
  } else {
    // mobile menu
    return (
      <div className="flex flex-row-reverse relative w-[100px]">
        <div>
          <Menu>
            {({ open }) => (
              <>
                {open ? (
                  <Menu.Button className="w-full text-right">
                    - Menu
                  </Menu.Button>
                ) : (
                  <Menu.Button className="w-full text-right">
                    + Menu
                  </Menu.Button>
                )}
                <Menu.Items className="flex flex-col text-right absolute right-0">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "opacity-75"}`}
                        href={aboutMe.url}
                      >
                        {aboutMe.title}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "opacity-75"}`}
                        href={interests.url}
                      >
                        {interests.title}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "opacity-75"}`}
                        href={contact.url}
                      >
                        {contact.title}
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

export type NavItemProps = {
  title: string;
  url: string;
};

export function NavItem({ title, url }: NavItemProps) {
  return (
    <li className="px-1">
      <a className="hover:underline hover:underline-offset-4" href={url}>
        {title}
      </a>
    </li>
  );
}
