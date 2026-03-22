import Link from "next/link";

type HeaderNavProps = {
    links: { href: string; label: string, classNames?: string }[];
};

export const HeaderNav = (props: HeaderNavProps) => {
    const { links } = props;
  return (
    <nav aria-label="Main navigation" className="header-nav">
      <ul className="flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-2">
            {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`header-links ${link.classNames ? link.classNames : ""}`}>{link.label}</Link>
                </li>
            ))}
      </ul>
    </nav>
  );
};