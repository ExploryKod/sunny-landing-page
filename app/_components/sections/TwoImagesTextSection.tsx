import { cn } from "@/lib/utils";
import { CardImageText } from "@/app/_components/cards/CardImageText";

export type TwoImagesTextSectionItem = {
  title: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  classNames?: string;
  odd?: boolean;
};

type TwoImagesTextSectionProps = {
  sections: TwoImagesTextSectionItem[];
  /** Optional accessible name for the section (e.g. screen readers) */
  ariaLabel?: string;
};

export const TwoImagesTextSection = ({
  sections,
  ariaLabel,
}: TwoImagesTextSectionProps) => {
  if (!sections?.length) {
    return null;
  }

  return (
    <section
      className="two-images-text-section section-container"
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      <div className="flex w-full flex-col md:flex-row gap-0">
        {sections.map((item) => (
          <div
            key={item.title}
            className="flex w-full max-h-[600px] min-w-0 justify-center md:flex-1 md:basis-0"
          >
            <CardImageText
              title={item.title}
              description={item.description}
              imageCard={item.image}
              classNames={item.classNames}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
