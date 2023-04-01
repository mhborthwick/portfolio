export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="bg-neutral-50">{children}</div>;
}

export default Layout;
