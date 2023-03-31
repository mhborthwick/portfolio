export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="m-8">{children}</div>;
}

export default Layout;
