import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const BrandBtn = ({
  src,
  alt,
  href,
  width = 100,
  height = 100,
  className,
}: {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("h-auto w-auto max-w-full", className)}
      />
    </Link>
  );
};