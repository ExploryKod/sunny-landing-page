import Image from "next/image";

type ImagesSectionProps = {
    images: { src: string; alt: string; width: number; height: number }[];
};

export const ImagesSection = (props: ImagesSectionProps) => {
    const { images } = props;
  return (
    <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {images.map((image, index) => (
                <div key={image.src} className="w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
            ))}
        </div>
    </section>
  );
};