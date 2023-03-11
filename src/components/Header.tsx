type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  return <div className="flex justify-between items-center">{children}</div>;
}

export default Header;
