import { Menu } from "@headlessui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { getNavItemByTitle } from "../utils";

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
  const resume = getNavItemByTitle(navItems, "Resume");
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
          <ExternalNavItem title={resume.title} url={resume.url} />
        </ul>
      </nav>
    );
  } else {
    // mobile menu
    return (
      <div className="flex flex-row-reverse relative w-[200px]">
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
                <Menu.Items className="flex flex-col text-right absolute right-0 bg-slate-200 rounded-md p-4">
                  {/* // TODO - componentize Menu.Item */}
                  <Menu.Item as={React.Fragment}>
                    {({ active }) => (
                      <a
                        className={`inline-flex ${
                          active &&
                          "opacity-75 hover:underline hover:underline-offset-4 underline underline-offset-4"
                        }`}
                        href={aboutMe.url}
                        onClick={(e) => {
                          handleScroll(e, aboutMe.url);
                          close();
                        }}
                      >
                        {aboutMe.title}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as={React.Fragment}>
                    {({ active }) => (
                      <a
                        className={`inline-flex ${
                          active &&
                          "opacity-75 hover:underline hover:underline-offset-4 underline underline-offset-4"
                        }`}
                        href={interests.url}
                        onClick={(e) => {
                          handleScroll(e, interests.url);
                          close();
                        }}
                      >
                        {interests.title}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as={React.Fragment}>
                    {({ active }) => (
                      <a
                        className={`inline-flex ${
                          active &&
                          "opacity-75 hover:underline hover:underline-offset-4 underline underline-offset-4"
                        }`}
                        href={resume.url}
                        onClick={(e) => {
                          handleScroll(e, resume.url);
                          close();
                        }}
                      >
                        {resume.title}
                        <span className="px-0.25">
                          <FiArrowUpRight size=".75em" />
                        </span>
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
        className="hover:underline hover:underline-offset-4 cursor-pointer hover:opacity-75"
        href={url}
        onClick={(e) => handleScroll(e, url)}
      >
        {title}
      </a>
    </li>
  );
}

export function ExternalNavItem({ title, url }: NavItemProps) {
  return (
    <li className="px-1">
      <a
        className="hover:underline hover:underline-offset-4 cursor-pointer hover:opacity-75 inline-flex"
        href={url}
        target="_blank"
      >
        {title}
        <span className="px-0.25">
          <FiArrowUpRight size=".75em" />
        </span>
      </a>
    </li>
  );
}
