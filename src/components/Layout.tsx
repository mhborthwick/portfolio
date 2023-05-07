export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <div className="bg-neutral-50">{children}</div>;
}
