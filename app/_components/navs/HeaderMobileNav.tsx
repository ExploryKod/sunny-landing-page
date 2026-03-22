import Link from "next/link";
import { cn } from "@/lib/utils";

type HeaderMobileNavProps = {
  links: { href: string; label: string; pill?: boolean }[];
  isOpen: boolean;
};

/** Same pill shell as desktop `HeaderNav` Contact: Fraunces, uppercase, full rounding; yellow fill instead of white */
const mobileContactPillClassName = cn(
  "group/contact relative isolate inline-flex w-full max-w-[min(100%,20rem)] items-center justify-center",
  "rounded-full px-8 py-5 font-fraunces uppercase text-grey-950",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-500",
);

const mobileContactPillBgClassName = cn(
  "absolute inset-0 -z-10 rounded-full bg-yellow-500 transition-opacity",
  "group-hover/contact:opacity-80 group-focus-visible/contact:opacity-80",
);

const mobileNavTextLinkClassName = cn(
  "block py-4 text-center font-barlow text-grey-600 no-underline transition-colors",
  "hover:text-grey-950 focus-visible:text-grey-950",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-950 rounded-sm",
);

/** Upward caret: tip aligned with top-trailing corner of the white panel (end edge in LTR) */
const mobileMenuBubbleTailClassName = cn(
  "pointer-events-none absolute end-0 top-0",
  "h-3 w-6 -translate-y-full bg-white",
  "[clip-path:polygon(50%_0,0_100%,100%_100%)]",
);

export const HeaderMobileNav = (props: HeaderMobileNavProps) => {
  const { links, isOpen } = props;
  return (
    <div
      aria-hidden={!isOpen ? true : undefined}
      className={cn(
        "md:hidden absolute top-[var(--header-height)] left-0 w-full z-50",
        "origin-top transition-[opacity,transform] duration-300 ease-out",
        "motion-reduce:transition-none",
        isOpen
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-2",
      )}
      inert={!isOpen}
    >
      <div className="relative mx-auto flex max-w-[90%] flex-col items-center justify-center bg-white py-6">
        <span className={mobileMenuBubbleTailClassName} aria-hidden />
        <nav aria-label="Main navigation" className="w-full max-w-[250px] px-4">
          <ul className="flex w-full flex-col items-stretch gap-1">
            {links.map((link) => (
              <li key={link.href} className="flex justify-center">
                {link.pill ? (
                  <Link href={link.href} className={mobileContactPillClassName}>
                    <span className={mobileContactPillBgClassName} aria-hidden />
                    {link.label}
                  </Link>
                ) : (
                  <Link href={link.href} className={mobileNavTextLinkClassName}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
