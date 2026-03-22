import Link from "next/link";

export const ContactBtn = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <p className="">Contact</p>
    </Link>
  );
};