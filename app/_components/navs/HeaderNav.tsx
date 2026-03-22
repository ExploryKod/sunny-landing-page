import Link from "next/link";

type HeaderNavProps = {
  links: { href: string; label: string; pill?: boolean }[];
};

/** White nav links: underline grows from the left on hover / keyboard focus */
const headerTextLinkClassName =
  "relative inline-block rounded-sm font-barlow text-white no-underline transition-colors " +
  "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:block after:h-[3px] after:w-full after:content-[''] " +
  "after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-[250ms] after:ease-in-out " +
  "hover:text-white hover:after:scale-x-100 focus-visible:text-white focus-visible:after:scale-x-100 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export const HeaderNav = (props: HeaderNavProps) => {
  const { links } = props;
  return (
    <nav aria-label="Main navigation" className="header-nav hidden md:block">
      <ul className="inline-flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            {link.pill ? (
              <Link
                href={link.href}
                className="group/contact relative isolate inline-flex items-center justify-center rounded-full px-8 py-5 font-fraunces uppercase text-grey-950 transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span
                  className="absolute inset-0 -z-10 rounded-full bg-white transition-opacity group-hover/contact:opacity-20 group-focus-visible/contact:opacity-20"
                  aria-hidden
                />
                {link.label}
              </Link>
            ) : (
              <Link href={link.href} className={headerTextLinkClassName}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};