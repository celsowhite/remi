import Hero from "./Hero";
import { SanityHero, SanityPageHero } from "@/types";

export interface PageHeroProps {
  title?: string;
  pageHero?: SanityPageHero;
}

export default function PageHero({ title, pageHero }: PageHeroProps) {
  console.log(pageHero);

  return (
    <>
      {/* Hero - Title */}
      {pageHero?.type === "title" && (
        <div className="py-10">
          <div className="container max-w-7xl">
            {pageHero.title ? <h1>{pageHero.title}</h1> : <h1>{title}</h1>}
            {pageHero.excerpt && (
              <div className="max-w-xl mt-5">
                <p>{pageHero.excerpt}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero - Image */}
      {pageHero?.type === "image" && (
        <Hero {...(pageHero?.hero as SanityHero)} className={`mb-10`} />
      )}
    </>
  );
}
