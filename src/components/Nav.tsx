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

// TODO - move to util, add unit test, rename url to id
function handleScroll(event: React.MouseEvent, url: string) {
  event.preventDefault();
  const validURLs = ["#about-me", "#interests"];
  if (validURLs.includes(url)) {
    const section = document.querySelector(url);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}

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
      <nav style={showDesktopNav}>
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
            {({ open, close }) => (
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
                  {/* // TODO - componentize Menu.Item */}
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "opacity-75"} cursor-pointer`}
                        onClick={(e) => {
                          handleScroll(e, aboutMe.url);
                          close();
                        }}
                      >
                        {aboutMe.title}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "opacity-75"} cursor-pointer`}
                        onClick={(e) => {
                          handleScroll(e, interests.url);
                          close();
                        }}
                      >
                        {interests.title}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "opacity-75"} cursor-pointer`}
                        onClick={(e) => {
                          handleScroll(e, contact.url);
                          close();
                        }}
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
      <a
        className="hover:underline hover:underline-offset-4 cursor-pointer"
        onClick={(e) => handleScroll(e, url)}
      >
        {title}
      </a>
    </li>
  );
}
