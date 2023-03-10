type IconsProps = {
  children: React.ReactNode;
};

export function Icons({ children }: IconsProps) {
  return <div className="flex">{children}</div>;
}

type IconProps = {
  type: string;
};

export function Icon({ type }: IconProps) {
  return <div>{type}</div>;
}
