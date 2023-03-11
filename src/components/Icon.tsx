import { IconType } from "react-icons";
import getIconAriaLabel from "../utils/getIconAriaLabel";

type IconsProps = {
  children: React.ReactNode;
};

export function Icons({ children }: IconsProps) {
  return <div className="flex">{children}</div>;
}

type IconProps = {
  Icon: IconType;
  type: string;
};

export function Icon({ Icon, type }: IconProps) {
  const label = getIconAriaLabel(type);
  return (
    <div className="px-1" aria-label={label}>
      <a href="#">{<Icon size="1.75em" />}</a>
    </div>
  );
}
