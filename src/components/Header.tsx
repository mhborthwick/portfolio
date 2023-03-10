type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  return <div className="flex justify-between">{children}</div>;
}

export default Header;
