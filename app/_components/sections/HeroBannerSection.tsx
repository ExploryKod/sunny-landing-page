import Image from "next/image";

type HeroBannerSectionProps = {
    title: string;
    image: { src: string; alt: string; width: number; height: number };
};

export const HeroBannerSection = (props: HeroBannerSectionProps) => {
    const { title, image } = props;
  return (
    <section className="hero-container">
        <div className="relative w-full">
            <div className="absolute inset-0 z-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority
                  loading="eager"
                  sizes="100vw"
                  className="h-full w-full object-cover opacity-50"
                />
            </div>
            <div className="relative z-10 flex min-h-[min(100vh,50rem)] w-full flex-col items-center gap-8 px-4">
                <div className="mt-[10vh] flex flex-col items-center justify-center"> 
                    <h1 id="hero-heading" className="hero-heading">
                    {title}
                    </h1>
                </div>
                <div className="mt-[100px] flex flex-col items-center justify-center">
                        <Image src="/icons/icon-arrow-down.svg" alt="Scroll down" width={36} height={114} />
                </div>
            </div>
        </div>
    </section>
  );
};