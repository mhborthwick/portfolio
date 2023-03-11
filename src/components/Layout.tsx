type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <div className="m-4">{children}</div>;
}

export default Layout;
