type NavProps = {
  children: React.ReactNode;
};

export function Nav({ children }: NavProps) {
  return (
    <nav>
      <ul className="flex">{children}</ul>
    </nav>
  );
}

type NavItemProps = {
  type: string;
};

export function NavItem({ type }: NavItemProps) {
  return (
    <div className="px-1">
      <a className="hover:underline hover:underline-offset-4" href="#">
        {type}
      </a>
    </div>
  );
}
