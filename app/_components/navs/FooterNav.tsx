import Link from "next/link";
import { cn } from "@/lib/utils";

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
                <Link
                  href={link.href}
                  className={cn("footer-links", link.classNames)}
                >
                  {link.label}
                </Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};