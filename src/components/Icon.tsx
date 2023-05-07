import { IconType } from "react-icons";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { getIconAriaLabel } from "../utils/getIconAriaLabel";
import { getNavItemByTitle } from "../utils/getNavItemByTitle";
import { NavItem } from "./Nav";

export type IconsProps = {
  navItems: NavItem[];
};

export function Icons({ navItems }: IconsProps) {
  const linkedIn = getNavItemByTitle(navItems, "LinkedIn");
  const gitHub = getNavItemByTitle(navItems, "GitHub");
  const mail = getNavItemByTitle(navItems, "Mail");
  return (
    <div className="flex">
      <Icon title={linkedIn.title} url={linkedIn.url} ReactIcon={CiLinkedin} />
      <Icon title={gitHub.title} url={gitHub.url} ReactIcon={VscGithubAlt} />
      <Icon title={mail.title} url={mail.url} ReactIcon={CiMail} />
    </div>
  );
}

export type IconProps = {
  ReactIcon: IconType;
  url: string;
  title: string;
};

export function Icon({ ReactIcon, title, url }: IconProps) {
  const label = getIconAriaLabel(title);
  return (
    <div className="px-1" aria-label={label}>
      {/* TODO: adjust link behavior for Mail */}
      <a className="hover:opacity-75" href={url} target="_blank">
        {<ReactIcon size="1.75em" />}
      </a>
    </div>
  );
}
