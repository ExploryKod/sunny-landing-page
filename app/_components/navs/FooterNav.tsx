import Link from "next/link";

type FooterNavProps = {
    links: { href: string; label: string, classNames?: string }[];
};

export const FooterNav = (props: FooterNavProps) => {
    const { links } = props;
  return (
    <nav aria-label="Footer navigation" className="hidden md:block">
      <ul className="flex flex-row items-center justify-center gap-x-4">
        {links.map((link) => (
            <li key={link.href}>
                <Link href={link.href} className={`footer-links ${link.classNames ? link.classNames : ""}`}>{link.label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};