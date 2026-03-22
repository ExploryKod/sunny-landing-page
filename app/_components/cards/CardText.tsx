import Link from "next/link";

type CardTextProps = {
  title: string;
  description: string;
  link: { href: string; text: string; color?: string };
  classNames?: string;
};

export const CardText = ({ title, description, link, classNames }: CardTextProps) => {



  const headingId = `section-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

  return (
    <article className={`card-text flex flex-col items-center justify-center p-5 md:p-20 ${classNames ? classNames : ""}`} 
    aria-labelledby={headingId}>
    <div className="flex flex-col gap-5 max-w-[400px]">
        <h2 id={headingId} className="heading-text-image">
        {title}
        </h2>
        <p className="text-body">{description}</p>
        <div className="flex flex-row items-center justify-start">
            <Link
              href={link.href}
              className={`learn-more-links learn-more-link--${link.color ?? "neutral"}`}
            >
              {link.text}
            </Link>
        </div>
    </div>
    

</article>
  );
};