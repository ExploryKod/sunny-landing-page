import Image from "next/image";
import { CardText } from "@/app/_components/cards/CardText";

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
      className={`text-image-section section-container flex flex-col md:flex-row md:items-stretch
        ${odd ? " md:flex-row-reverse" : ""}
      ${classNames ? ` ${classNames}` : ""}`}
    >
      <CardText
        title={title}
        description={description}
        link={link}
        classNames="w-full min-w-0 md:w-1/2"
      />
      <div className="relative w-full min-w-0 md:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </section>
  );
};