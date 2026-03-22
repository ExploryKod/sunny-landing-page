import { HeroBannerSection } from "@/app/_components/sections/HeroBannerSection";
import { TextImageSection } from "@/app/_components/sections/TextImageSection";
import { TestimonialCardsSection } from "@/app/_components/sections/TestimonialCardsSection";
import { ImagesSection } from "./_components/sections/ImagesSection";
import { TwoImagesTextSection } from "@/app/_components/sections/TwoImagesTextSection";

const textImageSections = [
  {
    title: "Transform your brand",
    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    image: { src: "/desktop/cards/image-transform.jpg", alt: "Transform your brand", width: 1000, height: 1000 },
    link: { text: "Learn more", href: "/transform", color: "yellow" },
    odd: false,
  },
  {
    title: "Stand out to the right audience",
    description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    image: { src: "/desktop/cards/image-stand-out.jpg", alt: "Stand out to the right audience", width: 1000, height: 1000 },
    link: { text: "Learn more", href: "/stand-out", color: "red" },
    odd: true,
  }
];

const twoImagesTextSectionsData = [
  {
    title: "Graphic design",
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    image: { src: "/desktop/cards/image-graphic-design.jpg", alt: "Graphic design", width: 1000, height: 1000 },
    odd: false,
  },
  {
    title: "Photography",
    description:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    image: { src: "/desktop/cards/image-photography.jpg", alt: "Photography", width: 1000, height: 1000 },
    odd: false,
  },
];

const TestimonialsCardsData = [
  {
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    role: "Marketing Director",
    image: { src: "/team/image-emily.jpg", alt: "Emily R.", width: 1000, height: 1000 },
  },
  {
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    role: "Chief Operating Officer",
    image: { src: "/team/image-thomas.jpg", alt: "Thomas S.", width: 1000, height: 1000 },
  },
  {
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    role: "Business Owner",
    image: { src: "/team/image-jennie.jpg", alt: "Jennie F.", width: 1000, height: 1000 },
    classNames: "md:col-span-2 lg:col-span-1",
  },
];

const images = [
  { src: "/desktop/cards/image-gallery-milkbottles.jpg", alt: "Milk bottles", width: 1000, height: 1000 },
  { src: "/desktop/cards/image-gallery-orange.jpg", alt: "Orange", width: 1000, height: 1000 },
  { src: "/desktop/cards/image-gallery-cone.jpg", alt: "Cone", width: 1000, height: 1000 },
  { src: "/desktop/cards/image-gallery-sugarcubes.jpg", alt: "Sugar cubes", width: 1000, height: 1000 },
];

export default function Home() {
  return (
 
      <main className="main-container" id="main">
        <HeroBannerSection title="We are creatives" image={{ src: "/desktop/image-header.jpg", alt: "Hero banner", width: 1000, height: 1000 }} />
        {textImageSections.map((section) => (
          <TextImageSection key={section.title} {...section} />
        ))}
    
        <TwoImagesTextSection sections={twoImagesTextSectionsData} />
        
        <ImagesSection images={images} />
        {TestimonialsCardsData && TestimonialsCardsData.length > 0 ? (
          <TestimonialCardsSection testimonialsCards={TestimonialsCardsData} />
        ) : null}
      </main>
  );
}
