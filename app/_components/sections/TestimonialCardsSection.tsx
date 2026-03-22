import { TestimonialCard } from "@/app/_components/cards/TestimonialCard";

type TestimonialCardsSectionProps = {
  testimonialsCards: {
    quote: string;
    name: string;
    role: string;
    image: { src: string; alt: string; width: number; height: number };
    classNames?: string;
  }[];
};

export const TestimonialCardsSection = (props: TestimonialCardsSectionProps) => {
  const { testimonialsCards } = props;

  return (
    <section className="section-container py-5 md:py-20" aria-labelledby="client-testimonials-heading">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 id="client-testimonials-heading" className="heading-testimonials">
          Client testimonials
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-10 py-4">
          {testimonialsCards?.length ? testimonialsCards.map((testimonialCard) => (
            <TestimonialCard
              key={testimonialCard.name}
              {...testimonialCard}
            />
          )) : null}
        </div>
      </div>
    </section>
  );
};