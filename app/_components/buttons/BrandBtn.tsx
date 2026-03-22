import Link from "next/link";
import Image from "next/image";

export const BrandBtn = ({
  src,
  alt,
  href,
  width = 100,
  height = 100,
}: {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-auto max-w-full"
      />
    </Link>
  );
};