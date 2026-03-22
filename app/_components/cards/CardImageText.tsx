import Image from "next/image";
import { cn } from "@/lib/utils";

type CardImageTextProps = {
  title: string;
  description: string;
  classNames?: string;
  imageCard?: { src: string; alt: string; width: number; height: number };
};

export const CardImageText = ({
  title,
  description,
  classNames,
  imageCard,
}: CardImageTextProps) => {
  const headingId = `section-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

  return (
    <div
      className={cn(
        "relative aspect-square w-full h-full overflow-hidden",
        classNames,
      )}
    >
      <article
        className="relative h-full w-full overflow-hidden"
        aria-labelledby={headingId}
      >
        {imageCard?.src ? (
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="relative h-full w-full">
              <Image
                src={imageCard.src}
                alt={imageCard.alt}
                fill
                sizes="(min-width: 768px) 25vw, min(100vw, 20rem)"
                className="object-cover object-top"
              />
            </div>
          </div>
        ) : null}

        <div className="absolute bottom-5 left-0 right-0 z-10 px-4 pb-5 pt-6 text-center">
          <div className="flex flex-col items-center justify-center max-w-[400px] mx-auto">
            <h2 id={headingId} className="heading-two-images-text">
              {title}
            </h2>
            <p className="text-two-images-text mt-2">{description}</p>
          </div>
        </div>
        
      </article>
    </div>
  );
};
