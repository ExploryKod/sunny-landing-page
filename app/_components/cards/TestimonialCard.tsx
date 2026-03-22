import Image from "next/image";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  image: { src: string; alt: string; width: number; height: number };
  classNames?: string;
};

export const TestimonialCard = ({
  quote,
  name,
  role,
  image,
  classNames,
}: TestimonialCardProps) => {
  const nameHeadingId = `testimonial-name-${name
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

  return (
    <article
      className={cn("flex flex-col items-center justify-center", classNames)}
      aria-labelledby={nameHeadingId}
    >
      <div className="flex flex-col items-center justify-center rounded-full">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="rounded-full w-full h-full object-cover" />
      </div>
      
      <div className="max-w-[300px] mt-5 flex flex-col items-center justify-center">
         <p className="text-body text-center">{quote}</p>
      </div>
    
      <div className="max-w-[300px] mt-10 flex flex-col items-center justify-center">
        <h3 id={nameHeadingId} className="text-heading-testimonials">
          {name}
        </h3>
        <p className="text-body">{role}</p>
      </div>
    </article>
  );
};