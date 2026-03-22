import Link from "next/link";
import Image from "next/image";

type SocialLinksProps = {
    socialIconsLinks: { 
        href: string; 
        src: string; 
        alt: string; 
        classNames?: string;
        width: number; 
        height: number 
    }[];
};

export const SocialLinks = (props: SocialLinksProps) => {
    const { socialIconsLinks } = props;
  return (
    <nav aria-label="Social links">
      <ul className="flex flex-row items-center justify-center gap-x-4">
        {socialIconsLinks.map((icon) => (
            <li key={icon.href}>
                <Link href={icon.href} className={`social-links ${icon.classNames ? icon.classNames : "h-6 w-6"}`}>
                    <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} className="w-full" />
                </Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};