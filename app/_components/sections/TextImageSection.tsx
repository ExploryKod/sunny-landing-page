import Image from "next/image";
import { CardText } from "@/app/_components/cards/CardText";
import { cn } from "@/lib/utils";

type TextImageSectionProps = {
    title: string;
    description: string;
    image: { src: string; alt: string; width: number; height: number };
    link: { text: string; href: string; color?: string };
    classNames?: string;
    odd?: boolean;
};

export const TextImageSection = (props: TextImageSectionProps) => {
    const { title, description, image, link, classNames, odd } = props;
  return (
    <section
      className={cn(
        "text-image-section section-container flex min-h-[clamp(30rem,65svh,48rem)] flex-col md:min-h-0 md:flex-row md:items-stretch",
        odd && "md:flex-row-reverse",
        classNames,
      )}
    >
      <CardText
        title={title}
        description={description}
        link={link}
        classNames={cn(
          "w-full min-w-0 min-h-0 flex-1 basis-0 md:basis-auto md:flex-none md:w-1/2",
        )}
      />
      <div className="relative flex min-h-0 w-full min-w-0 flex-1 basis-0 md:flex-none md:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </section>
  );
};