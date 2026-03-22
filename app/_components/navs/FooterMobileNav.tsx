import Link from "next/link";

type FooterMobileNavProps = {
    links: { href: string; label: string }[];
};

export const FooterMobileNav = (props: FooterMobileNavProps) => {
    const { links } = props;
    return (
        <nav aria-label="Footer mobile navigation" className="md:hidden">
            <ul>
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
            </ul>
        </nav>
    );
};